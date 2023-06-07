### nest Commands

#### 创建项目

```shell
new | n [options] [name] Generate Nest application.

Options:
  --directory [directory]                  Specify the destination directory
  -d, --dry-run                            Report actions that would be performed without writing out results. (default: false)
  -g, --skip-git                           Skip git repository initialization. (default: false) ##不初始化git
  -s, --skip-install                       Skip package installation. (default: false) ## 跳过 install
  -p, --package-manager [package-manager]  Specify package manager. ## 使用 pnpm npm yarn 管理
  -l, --language [language]                Programming language to be used (TypeScript or JavaScript) (default: "TypeScript") ## 选择 ts 或者 js
  -c, --collection [collectionName]        Schematics collection to use (default: "@nestjs/schematics") ## generate 指令的合集
  --strict                                 Enables strict mode in TypeScript. (default: false) ## 严格模式
  -h, --help                               Output usage information. ## 命令帮助

```

#### 打包项目 使用 tsc 或者 webpack 构建代码

```shell
build [options] [app] Build Nest application.

Options:
  -c, --config [path]   Path to nest-cli configuration file. ## 指定nest cli 配置文件
  -p, --path [path]     Path to tsconfig file. ## 指定 tsc 配置文件的路径的
  -w, --watch           Run in watch mode (live-reload). ## 自动build
  --watchAssets         Watch non-ts (e.g., .graphql) files mode.
  --webpack             Use webpack for compilation. ## 使用 webpack编译
  --webpackPath [path]  Path to webpack configuration. ## webpack config 文件路径
  --tsc                 Use tsc for compilation. ## 使用tsc 编译
  -h, --help            Output usage information.
```

#### 启动开发服务, 支持 watch 和调试

```shell
start [options] [app] Run Nest application.

Options:
  -c, --config [path]        Path to nest-cli configuration file. ## 指定nest cli 配置文件
  -p, --path [path]          Path to tsconfig file. ## tsconfig 文件
  -w, --watch                Run in watch mode (live-reload). ## watch
  --watchAssets              Watch non-ts (e.g., .graphql) files mode.
  -d, --debug [hostport]     Run in debug mode (with --inspect flag). ## 调试模式
  --webpack                  Use webpack for compilation. ## 使用webpack
  --webpackPath [path]       Path to webpack configuration. ## webpack config 文件路径
  --tsc                      Use tsc for compilation. ## 使用 tsc
  --sourceRoot [sourceRoot]  Points at the root of the source code for the single project in standard mode structures, or the default project in monorepo mode structures.
  --entryFile [entryFile]    Path to the entry file where this command will work with. Defaults to the one defined at your Nest's CLI config file.
  -e, --exec [binary]        Binary to run (default: "node").  ## 指定环境跑
  --preserveWatchOutput      Use "preserveWatchOutput" option when tsc watch mode.
  -h, --help                 Output usage information.
```

#### 打印 node、npm、nest 包的依赖版本

```shell
info | i Display Nest project details.

Options:
  -h, --help  Output usage information.
```

#### 添加依赖

```shell
add [options] <library> Adds support for an external library to your project.

Options:
  -d, --dry-run            Report actions that would be performed without writing out results.
  -p, --project [project]  Project in which to generate files.
  -h, --help               Output usage information.
```

#### 快速生成各种代码

```shell
generate | g [options] <schematic> [name] [path] Generate a Nest element.

Generate a Nest element.
  Schematics available on @nestjs/schematics collection:
    ┌───────────────┬─────────────┬──────────────────────────────────────────────┐
    │ name          │ alias       │ description                                  │
    │ application   │ application │ Generate a new application workspace         │
    │ class         │ cl          │ Generate a new class                         │
    │ configuration │ config      │ Generate a CLI configuration file            │
    │ controller    │ co          │ Generate a controller declaration            │
    │ decorator     │ d           │ Generate a custom decorator                  │
    │ filter        │ f           │ Generate a filter declaration                │
    │ gateway       │ ga          │ Generate a gateway declaration               │
    │ guard         │ gu          │ Generate a guard declaration                 │
    │ interceptor   │ itc         │ Generate an interceptor declaration          │
    │ interface     │ itf         │ Generate an interface                        │
    │ middleware    │ mi          │ Generate a middleware declaration            │
    │ module        │ mo          │ Generate a module declaration                │
    │ pipe          │ pi          │ Generate a pipe declaration                  │
    │ provider      │ pr          │ Generate a provider declaration              │
    │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
    │ service       │ s           │ Generate a service declaration               │
    │ library       │ lib         │ Generate a new library within a monorepo     │
    │ sub-app       │ app         │ Generate a new application within a monorepo │
    │ resource      │ res         │ Generate a new CRUD resource                 │
    └───────────────┴─────────────┴──────────────────────────────────────────────┘

Options:
  -d, --dry-run                      Report actions that would be taken without writing out results.
  -p, --project [project]            Project in which to generate files.
  --flat                             Enforce flat structure of generated element.
  --no-flat                          Enforce that directories are generated.
  --spec                             Enforce spec files generation. (default: true)
  --skip-import                      Skip importing (default: false)
  --no-spec                          Disable spec files generation.
  -c, --collection [collectionName]  Schematics collection to use.
  -h, --help                         Output usage information.

```

- nest generate module moduleName / nest g mo moduleName 生成一个 module
- nest generate class className / nest g cl className 生成一个类
- nest generate controller controllerName / nest g co controllerName 生成一个控制器
- nest generate service serviceName / nest g s serviceName 生成一个服务

### IOC

IOC 就是 Inverse Of Control 即 控制反转

后端系统中会存在很多对象

- Controller 对象: 接收 http 请求, 调用 Service 返回响应
- Service 对象: 实现业务逻辑
- Repository 对象: 实现对数据库的增删改查

还有数据库链接对象 DataSource, 配置对象 Config 等等

> 有着以下一样的关系
>
> Controller 依赖了 Service 实现业务逻辑, Service 依赖了 Repository 来做增删改查, Repository 依赖 DataSource 来建立连接, DataSource 又需要从 Config 对象拿到用户名密码等信息

```JavaScript
const config = new Config({ username: 'xxx', password: 'xxx'});

const dataSource = new DataSource(config);

const repository = new Repository(dataSource);

const service = new Service(repository);

const controller = new Controller(service);
```

每次使用 Controller 都要 new 一堆对象

在应用初始化的时候, 需要理清依赖的先后关系, 创建一大堆对象组合起来

> 解决上面这种 当我们使用 Controller 时, 避免我们特地的去 new 一堆 初始化的操作, 交给工具去分析, 然后按照先后顺序创建并组装好, 这就是 IOC

它有一个放对象的容器, 程序初始化的时候会扫描 class 上声明的依赖关系, 然后把这些 class 都给 new 一个实例放到容器里。

创建对象的时候, 还会把它们依赖的对象注入进去。

这样不就完成了自动的对象创建和组装么？

这种依赖注入的方式叫做 `Dependency Injection`, 简称 `DI`

### 全局模块

使用 `@Global()` 声明全局模块

不过全局模块还是尽量少用, 不然注入的很多 `provider` 都不知道来源, 会降低代码的可维护性

### 全局模块

使用 `@Global()` 声明全局模块

不过全局模块还是尽量少用, 不然注入的很多 `provider` 都不知道来源, 会降低代码的可维护性

### 生命周期

Nest 在启动的时候, 会递归解析 `Module` 依赖, 扫描其中的 `provider、controller`, 注入它的依赖, 全部解析完后, 会监听网络端口, 开始处理请求

首先, 递归初始化模块, 会依次调用模块内的 `controller、provider` 的 `onModuleInit` 方法, 然后再调用 `module` 的 `onModuleInit` 方法

全部初始化完之后, 再依次调用模块内的 `controller、provider` 的 `onApplicationBootstrap` 方法, 然后调用 `module` 的 `onApplicationBootstrap` 方法

下面是打印顺序:

```shell
test2Controller module init
test2Service module init
test2Module module init
test1Controller module init
test1Service module init
test1Module module init
test2Controller application bootstrap
test2Service application bootstrap
test2Module application bootstrap
test1Controller application bootstrap
test1Service application bootstrap
test1Module application bootstrap
```

应用销毁的时候也同样有生命周期

先调用每个模块的 `controller、provider` 的 `onModuleDestroy` 方法, 然后调用 `Module` 的 `onModuleDestroy` 方法

之后再调用每个模块的 `controller、provider` 的 `beforeApplicationShutdown` 方法, 然后调用 `Module` 的 `beforeApplicationShutdown` 方法

然后停止监听网络端口

之后调用每个模块的 `controller、provider` 的 `onApplicationShutdown` 方法, 然后调用 `Module` 的 `onApplicationShutdown` 方法

beforeApplicationShutdown 是可以拿到 signal 系统信号的, 比如 SIGTERM

这些终止信号是别的进程传过来的, 让它做一些销毁的事情, 比如用 k8s 管理容器的时候, 可以通过这个信号来通知它

下面是打印顺序:

```shell
test2Controller module destroy
test2Service module destroy
test2Module module destroy
test1Controller module destroy
test1Service module destroy
test1Module module destroy
test2Controller before application shutdown undefined
test2Service before application shutdown undefined
test2Module before application shutdown undefined
test1Controller before application shutdown undefined
test1Service before application shutdown undefined
test1Module before application shutdown undefined
test2Controller application shutdown undefined
test2Service application shutdown undefined
test2Module application shutdown undefined
test1Controller application shutdown undefined
test1Service application shutdown undefined
test1Module application shutdown undefined
```

### moduleRef

`moduleRef` 就是当前模块的对象

通过 `moduleRef` 取出一些 `provider` 来销毁

### AOP

AOP(Aspect Oriented Programming) 即面向切面编程

AOP 的好处是可以把一些通用逻辑分离到切面中, 保持业务逻辑的纯粹性, 这样切面逻辑可以复用, 还可以动态的增删

Nest 实现 AOP 的方式更多, 一共有五种

1. Middleware
2. Guard
3. Pipe
4. Interceptor
5. ExceptionFilter

#### 中间件 middleware

Nest 的底层是 Express, 所以自然也可以使用中间件, 但是做了进一步的细分, 分为了全局中间件和路由中间件

**全局中间件**

```TypeScript
const app = await NestFactory.create(AppModule);
app.use(logger); // 这里的 logger 就是全局中间件
```

**路由中间件**
顾名思义只是针对一部分路由来说的

```TypeScript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerMiddleware).forRoutes('cats')
  }
}
```

#### Guard

Guard 是路由守卫的意思, 可以用于在调用某个 Controller 之前判断权限, 返回 true 或者 false 来决定是否放行

```TypeScript
@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<Boolean> | Observable<Boolean> {
    return true;
  }
}
```

Guard 要实现 `CanActivate` 接口, 实现 `canActivate` 方法, 可以从 `context` 拿到请求的信息, 然后做一些`权限验证等处理之后`返回 true 或者 false

```TypeScript
@UseGuards(RolesGuard) // 通过 @UseGuards 使用
```

当然也可以**全局使用**

```TypeScript
app.useGlobalGuards(new RolesGuard())
```

Guard 可以抽离路由的访问控制逻辑, 但是不能对请求、响应做修改, 这种逻辑可以使用 Interceptor

#### Interceptor

Interceptor 是拦截器的意思, 可以在目标 Controller 方法前后加入一些逻辑

nterceptor 要实现 NestInterceptor 接口, 实现 intercept 方法, 调用 next.handle() 就会调用目标 Controller, 可以在之前和之后加入一些处理逻辑

```TypeScript
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  interceptor(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('before....');
    return next.handler().pipe(
      tap(() => console.log('after ....'))
    )
  }
}
```

**局部使用**

```TypeScript
@useInterceptors(LoggingInterceptor)
```

**全局使用**

```TypeScript
app.useGlobalInterceptors(new LoggingInterceptor())
```

#### Pipe

除了路由的权限控制、目标 Controller 之前之后的处理这些都是通用逻辑外, 对参数的处理也是一个通用的逻辑, 所以 Nest 也抽出了对应的切面, 也就是 Pipe

Pipe 是管道的意思, 用来对参数做一些检验和转换

Pipe 要实现 PipeTransform 接口, 实现 transform 方法, 里面可以对传入的参数值 value 做参数验证, 比如格式、类型是否正确, 不正确就抛出异常。也可以做转换, 返回转换后的值

```TypeScript
@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentsMetadata) {
    return value
  }
}
```

内置的有 9 个 Pipe

1. ValidationPipe
2. ParseIntPipe
3. ParseBoolPipe
4. ParseArrayPipe
5. ParseUUIDPipe
6. DefaultValuePipe
7. ParseEnumPipe
8. ParseFloatPipe
9. ParseFilePipe

Pipe 可以只对`某个参数`生效, `某个路由`生效, 也可以对`每个路由`都生效

**某个参数**

```TypeScript
@Get()
hello(@Param('aaa', ParseIntPipe), aaa: number) {}
```

**某个路由**

```TypeScript
@Post()
@usePipes(ValidationPipe)
```

**全局**

```TypeScript
app.useGlobalPipes(new ValidationPipe())
```

#### ExceptionFilter

ExceptionFilter 可以对抛出的异常做处理, 返回对应的响应：

首先要实现 ExceptionFilter 接口, 实现 catch 方法, 就可以拦截异常了, 但是要拦截什么异常还需要用 @Catch 装饰器来声明, 拦截了异常之后, 可以返回对应的响应, 给用户更友好的提示

```TypeScript
@Catch(HttpExecption)
export class HttpExecptionFilter implements ExceptionFilter {
  catch(exception: HttpExecption, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const respose = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    respose.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url
    })
  }
}
```

Nest 内置了很多 http 相关的异常, 都是 HttpException 的子类

1. BadRequestException
2. UnauthorizedException
3. NotFoundException
4. ForbiddenException
5. NotAcceptableException
6. RequestTimeoutException
7. ConflictException
8. GoneException
9. PayloadTooLargeException
10. UnsupportedMediaTypeException
11. UnprocessableException
12. InternalServerErrorException
13. NotImplementedException
14. BadGatewayException
15. ServiceUnavailableException
16. GatewayTimeoutException

还可以自己扩展

```TypeScript
export class ForbiddenException implements HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN)
  }
}
```

Nest 通过这样的方式实现了异常到响应的对应关系, 代码里只要抛出不同的异常, 就会返回对应的响应, 很方便

**局部生效**

```TypeScript
@Post()
@useFilters(new ForbiddenException())
```

**全局生效**

```TypeScript
app.useGlobalFilters(new ForbiddenException())
```

#### 调用顺序

Middleware(最外层) =>Guard(判断路由有没有权限访问) =>ExceptionFilter(异常都会被 ExceptionFilter 处理, 返回不同的响应) =>Interceptor(Contoller 前后扩展一些逻辑) =>Pipe(对参数做检验和转换)

### 装饰器

- @Module({}) 申明模块用的
- @Controller() 申明 Controller
- @Injectable() 申明 provider(任何的 class)
- @Inject(xxx) 属性注入 (xxx 代表对应的 token)
- @Optional() 指明属性可选
- @Global() 申明全局
- @Catch(xxxx) 申明一个自定义的 ExceptionFilter
- @UseFilters(xxx) 在 handler 上使用 xxx ExceptionFilter
- @UseGuards(xxx) 在 handler 上使用 xxx Guard
- @UseInterceptors(xxx) 在 handler 上使用 xxx Interceptor
- @UsePipes(xxx) 在 handler 上使用 xxx Pipe
- @Param('xxx', xxxPipe) 使用 xxxPipe 校验 xxx 属性对应的值, `@Param` 是获取路径中的参数 `/xxx/111` 中的 111
- @Query('xxx', xxxPipe) 使用 xxxPipe 校验 xxx 属性对应的值, `@Query` 是获取 `url?=` 后面的参数 `?b=1`
- @Post('xxx') 接收 Post 请求
- @Body() 获取 Post 请求 body 部分的参数
- @Get() 接收 get 请求
- @Put() 接收 put 请求
- @Delete() 接收 delete 请求
- @Patch() 接收 patch 请求
- @Head() 接收 Head 请求
- @Options() 接收 options 请求
- @SetMetadata 为 `handler` 和 `class` 指定 `metadata`, 然后在 `guard` 或者 `interceptor` 里取出来
- @Headers(key) 装饰器取某个请求头 或者全部请求头
- @Ip 拿到 ip
- @Session 拿到 session 对象
- @HostParam
- 通过 @Req 或者 @Request 装饰器 拿到 `request` 对象
- @Res 或者 @Response 拿到 response 对象, 需要自己手动 end 一下, 或者 指定参数 passthrough: true 这样才会响应
- @Next 有两个 handler 来处理同一个路由的时候, 可以在第一个 handler 里注入 next, 调用它来把请求转发到第二个 handler
- @HttpCode 修改默认的 handler 的状态码
- @Header 修改响应头
- @Redirect 重定向
- @Render 返回的响应内容指定渲染引擎

### Reflect 与 Metadata

还在[草案](https://rbuckton.github.io/reflect-metadata/)当中

Nest 的装饰器的实现原理就是 `Reflect.getMetadata`、`Reflect.defineMetadata` 这些 api
通过在 `class`、`method` 上添加 `metadata`, 然后扫描到它的时候取出 `metadata` 来做相应的处理来完成各种功能

实例化对象还需要构造器参数的类型, 这个开启 ts 的 `emitDecoratorMetadata` 的编译选项之后, ts 就会自动添加一些元数据, 也就是 `design:type`、`design:paramtypes`、`design:returntype` 这三个, 分别代表被装饰的`目标的类型`、`参数的类型`、`返回值的类型`

### 循环依赖

`Module` 之间可以相互 `imports`, `Provider` 之间可以相互注入, 这两者都会形成循环依赖

解决方式就是两边都用 `forwardRef` 来包裹下

它的原理就是 nest 会先创建 `Module`、`Provider`, 之后再把引用转发到对方, 也就是 `forwardRef`

```TypeScript
// module
@Module({
  imports:[
    forwardRef(() => AaaModule)
  ]
})

// provider
@Injectable()
export class DddService {
  constructor( @Inject(forwardRef(() => CccService)) private cccService: CccService){}

  getHello(): string {
    return this.cccService.eee() + 'ddd';
  }
}
```
