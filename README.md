# react study

react 学习

## create-react-app

### 1. 安装 create-react-app

```bash
yarn global add create-react-app
```

### 2. 创建项目

```bash
create-react-app react-study
```

## 练习

### 外层组件修改内层组件 props

#### 用途

`ant design` 的 `formItem` 组件动态给被包裹组件 `value` 和 `onChange` 赋值

#### 实现

通过 `cloneElement` 实现

#### 例: 

[cloneElementTestView](./src/view/CloneElementTestView/index.js)

#### 核心代码:

```jsx
import React, { cloneElement } from "react";

const FatherComponent = ({ children }) => {
  return (
    <div>
      <div>this is my children: </div>
      {/* 给子组件 name 赋值 */}
      {cloneElement(children, { name: "Father set" })}
    </div>
  );
};

export default FatherComponent;
```