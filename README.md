# React-Cloud-Music

1、class 组件不再用，全面拥抱 hooks ，统一用函数组件。

2、组件内部状态用 hooks 处理，凡是业务数据全部放在 redux 中管理。

3、 ajax 请求以及后续数据处理的具体代码全部放在 actionCreator 中，由 redux-thunk 进行处理，尽可能精简组件代码。

4、每一个容器组件都有自己独立的 reducer，然后再全局的 store 下通过 redux 的 combineReducer 方法合并。

5、JS 变量名 (包括函数名) 采用小驼峰的方式，组件名或者 styled-components 导出的样式容器名都采用大驼峰，常量名所有字母大写。

6、普通 CSS 类名全部用英语小写，单词间用下划线连接，CSS 动画钩子类名中单词用 - 连接。

7、凡是 props 中有数据的，全部在组件最前面提前解构赋值，并且，获得的属性名和方法名要分开声明，从父组件获得的 props 和通过 react-redux 中映射获得的 props 也要分开声明。

8、useEffect 统一写在最前面，并且紧跟着 props 解构赋值代码后面。

9、凡是负责返回 JSX 的函数，统一聚集在函数最后面，中间不要穿插事件处理函数和其他逻辑。

10、mapDispatchToProps 返回的函数中，函数名格式为 xxxDispatch，以免和现有 action 名冲突。

11、每个组件都应用 memo 包裹，使得 React 在更新组件之前进行 props 的比对，若 props 不变则不对组件更新，减少不必要的重渲染。
