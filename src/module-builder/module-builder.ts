import { ConfigurableModuleBuilder } from '@nestjs/common';

export interface ModuleBuilderOptions {
  age: number;
  name: string;
}

// 返回 调用的 register / registerAsync
export const {
  ConfigurableModuleClass,
  MODULE_OPTIONS_TOKEN,
  OPTIONS_TYPE,
  ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<ModuleBuilderOptions>().build();

// 如果要使用 forRoot/forRootAsync
// export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
//   new ConfigurableModuleBuilder<ModuleBuilderOptions>()
//     .setClassMethodName('forRoot')
//     .build();

// 使用 forFeature/forFeatureAsync
// export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
//   new ConfigurableModuleBuilder<ModuleBuilderOptions>()
//     .setClassMethodName('forFeature')
//     .build();

// 如果我们要注册为全局模块
// export const {
//   ConfigurableModuleClass,
//   MODULE_OPTIONS_TOKEN,
//   OPTIONS_TYPE,
//   ASYNC_OPTIONS_TYPE,
// } = new ConfigurableModuleBuilder<ModuleBuilderOptions>()
//   .setExtras(
//     {
//       isGlobal: true,
//     },
//     (definition, extras) => {
//       return {
//         ...definition,
//         global: extras.isGlobal,
//       };
//     },
//   )
//   .build();
