/*
 * @Descripttion: 
 * @version: 
 * @Author: Piers
 * @Date: 2021-04-10 23:43:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-23 17:46:40
 */
import React, { useState, useMemo, useEffect } from "react";
import { Dropdown, Menu, Modal, Table, Button } from "antd";
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";
import { useDebounce, useDocumentTitle } from "utils";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";
import {
  useProjectModal,
  useProjectsSearchParams,
} from "screens/project-list/util";
import {
  ButtonNoPadding,
  ErrorBox,
  Row,
  ScreenContainer,
} from "components/lib";

// 状态提升可以让组件共享状态，但是容易造成 prop drilling

// 基本类型，可以放到依赖里；组件状态，可以放到依赖里；非组件状态的对象，绝不可以放到依赖里
// https://codesandbox.io/s/keen-wave-tlz9s?file=/src/App.js

// 使用 JS 的同学，大部分的错误都是在 runtime(运行时) 的时候发现的
// 我们希望，在静态代码中，就能找到其中的一些错误 -> 强类型
export const One = () => {
  const [val, setVal] = useState('');
  const btnClick = (e: any) => {
    setVal(val + '-one'); // 每次点击都给val+改变val都层级
  }
  console.log('render level1');
  return (
      <div>
        <div>Level1: {val}</div>
        <Button onClick={btnClick} type="default">按钮1</Button>
        <div>
          <Two val={val}></Two>
        </div>
      </div>
  );
};

const Two = (props: any) => {
  const [value, setValue] = useState(''); // 第二层只是传递第一层给的val给第三层，第二层自己有一个val
  const btnClick = (e: any) => {
    setValue(value + '-two')
  }
  console.log('render level2')
  return (
    <div>
      <div>Level2: {value}</div>
      <Button onClick={btnClick} type="default">按钮2</Button>
      <Three val={props.val}></Three>
    </div>
  )
};

const Three = (props: {val: string}) => {
  const [value, setValue] = useState(props.val);
  const btnClick = (e: any) => {
    setValue(value + '-three')
  }
  useEffect(() => {
    setValue(props.val + '-three')
  }, [props.val])
  console.log('render level3')
  return (
    <div>
      <div>Level3: {value}</div>
      <Button onClick={btnClick} type="default">按钮3</Button>
    </div>
  )
}
// class Four extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       val: '1'
//     }
//   }
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }

