# 芝麻背调重构

> 更换 React 语言框架，提高系统性能和稳定性，低耦合高复用、组件模版工厂便于更好的维护和升级，提高开发效率，降低开发成本....

- 语言框架：React 需要同时安装 react >= 16.8 和 react-dom >= 16.8
- UI 组件库：Arco Design
- Node 版本：v16.20.1
- 入口页面 public

```
zmbd-new-client

│   README.md

│   index.tsx

└───public

│   │   index.html

└───src

│   │   index.tsx

│   │   layout.tsx

│   │   routes.tsx

│   └───components

│       │   file111.txt

│       │   file112.txt

│       │   ...

│

```

## 快速开始

```
// 初始化项目
npm install

// 开发模式
npm run dev

// 构建
npm run build
```

## 相关资源

[Arco Design](https://arco.design)

[Icons](https://arco.design/react/en-US/components/icon)

## 部署

node 部署的环境是 v16.20.1

// 测试环境

```
npm -v
node -v
npm install --registry=https://registry.npm.taobao.org
npm run build:test
rm -f hris-web.tar
tar -cvf hris-web.tar ./dist

```

## 注意事项

1、bizcharts v4.1.22 所依赖的 react 版本是 v16.14.0, 与其他依赖 react 版本要保持一致，否则会有版本冲突
