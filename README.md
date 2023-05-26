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

#### 启动开发服务，支持 watch 和调试

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
