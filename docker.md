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


### 总结

docker 镜像是通过 dockerfile 构建出来的。

我们写了第一个 dockerfile, 通过 FROM、WORKDIR、COPY、RUN、EXPOSE、CMD 等指令声明了一个 http-server 提供静态服务的镜像。

docker run 这个镜像就可以生成容器, 指定映射的端口、挂载的数据卷、环境变量等。

VOLUME 指令看起来没啥用, 但能保证你容器内某个目录下的数据一定会被持久化, 能保证没挂载数据卷的时候, 数据不丢失。

写完这个 dockerfile, 相信你会对 docker 镜像、容器有更具体的理解了