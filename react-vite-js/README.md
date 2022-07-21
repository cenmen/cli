### 安装使用步骤 📑

- **Install：**

```text
# node > 14.18.0
yarn
```

- **Run：**

```text
# 开发环境
npm run dev
# 测试环境
npm run tst
```

- **Build：**

```text
# 开发环境
npm run build:dev

# 测试环境
npm run build:tst

# 生产环境
npm run build:pro
```

- **Lint：**

```text
# eslint 检测代码
npm run lint:eslint

# prettier 格式化代码
npm run lint:prettier

# stylelint 格式化样式
lint:stylelint
```

### 文件资源目录 📚

```text
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ constants           # 全局常量
│  ├─ language            # 语言国际化
│  ├─ routers             # 路由管理
│  ├─ redux               # redux store
│  ├─ styles              # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.jsx             # 入口页面
│  ├─ main.jsx            # 入口文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ lint-staged.config     # lint-staged 配置文件
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
└─ vite.config.js         # vite 配置
```

### 参考链接

- vite
  - [官方文档](https://cn.vitejs.dev/guide/)
- axios
  - [官方文档](https://www.axios-http.cn/)
- react-router-v6
  - [官方文档](https://reactrouter.com/docs/en/v6/getting-started/overview)
- redux-persist
  - [官方文档](https://openbase.com/js/redux-persist)
- ~~react-query~~
  - ~~[官方文档](https://tanstack.com/query/v4/docs/overview)~~
  - ~~[数据请求利器 React Query](https://zhuanlan.zhihu.com/p/522609991)~~

### TODO

- ~~移除非必要页面~~
- ~~移除 tab 栏~~
- ~~移除国际化~~
- ~~响应式布局（放弃）~~
- ~~移除 TypeScript~~
- ~~调整 git 提交钩子~~
- ~~状态管理选型~~
- ~~moment 换成 dayjs~~
- ~~组件代码优化~~
- query hook
- ~~自动登录获取 token（放弃）~~

### 开发指引

- 引入自定义样式时文件名使用 xxx.module.less 命名规则，vite 构建时添加 hash 值防止样式被覆盖。
- 组件或标签内使用 className="xxx" 字符串时可留意 styles 里面的全局样式。

### Problem

- [HMR error: Cannot access '...' before initialization](https://github.com/vitejs/vite/issues/4430)
