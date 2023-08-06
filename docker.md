### Dockerfile 制作镜像

```dockerfile
FROM node:latest 

WORKDIR /app

COPY . .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g http-server

EXPOSE 8080

CMD ["http-server", "-p", "8080"]
```

- FROM: 基于一个基础镜像来修改
- WORKDIR: 指定当前工作目录
- COPY: 把容器外的内容复制到容器内
- EXPOSE: 声明当前容器要访问的网络端口, 比如这里起服务会用到 8080
- RUN: 在容器内执行命令
- VOLUME 指定挂载卷
- CMD: 容器启动的时候执行的命令

然后通过 `docker build -t 镜像名:标签 .` 生成镜像

`docker build -t 镜像名:标签 -f DockerfileName .` -f 指定 Dockerfile 文件


### .dockerignore

通过 `.dockerignore` 声明哪些不需要发送给 docker daemon 构建

```
*.md
!README.md
node_modules/
[a-c].txt
.git/
.DS_Store
.vscode/
.dockerignore
.eslintignore
.eslintrc
.prettierrc
.prettierignore
# 这是一个注释
```

- *.md 就是忽略所有 md 结尾的文件，然后 !README.md 就是其中不包括 README.md
- node_modules/ 就是忽略 node_modules 下 的所有文件
- [a-c].txt 是忽略 a.txt、b.txt、c.txt 这三个文件
- .DS_Store 是 mac 的用于指定目录的图标、背景、字体大小的配置文件，这个一般都要忽略
- eslint、prettier 的配置文件在构建镜像的时候也用不到

`docker build` 时，会先解析 `.dockerignore`, 把该忽略的文件忽略掉, 然后把剩余文件打包发送给 docker daemon 作为上下文来构建产生镜像

### 多阶段构建

基于前一次的构建的基础上再进行构建, 不需要使用多个 Dockerfile, 只需要一个 Dockerfile

```docker
# build stage
FROM node:18 as build-stage

WORKDIR /app

COPY package.json .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM node:18 as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm install --production

EXPOSE 3000

CMD ["node", "/app/main.js"]
```

通过 FROM 继承镜像的时候，给当前镜像指定一个名字，比如 build-stage。

然后第一个镜像执行 build。

之后再通过 FROM 继承 node 镜像创建一个新镜像。

通过 COPY --from-build-stage 从那个镜像内复制 /app/dist 的文件到当前镜像的 /app 下。

还要把 package.json 也复制过来，然后切到 /app 目录执行 npm install --production 只安装 dependencies 依赖

这个生产阶段的镜像就指定容器跑起来执行 node /app/main.js 就好了。

执行 docker build, 打上 second 标签：

### 总结

docker 镜像是通过 dockerfile 构建出来的。

我们写了第一个 dockerfile, 通过 FROM、WORKDIR、COPY、RUN、EXPOSE、CMD 等指令声明了一个 http-server 提供静态服务的镜像。

docker run 这个镜像就可以生成容器, 指定映射的端口、挂载的数据卷、环境变量等。

VOLUME 指令看起来没啥用, 但能保证你容器内某个目录下的数据一定会被持久化, 能保证没挂载数据卷的时候, 数据不丢失。

写完这个 dockerfile, 相信你会对 docker 镜像、容器有更具体的理解了