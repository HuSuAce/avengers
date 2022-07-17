/*
 * @Descripttion: 
 * @version: 
 * @Author: Piers
 * @Date: 2021-04-10 23:43:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-23 16:04:33
 */
import React, {useState} from "react";
import { Dropdown, Menu, Modal, Table, Button } from "antd";
import dayjs from "dayjs";
import { TableProps } from "antd/es/table";
// react-router 和 react-router-dom的关系，类似于 react 和 react-dom/react-native/react-vr...
import { Link } from "react-router-dom";
import { Pin } from "components/pin";
import { useDeleteProject, useEditProject } from "utils/project";
import { ButtonNoPadding } from "components/lib";
import {
  useProjectModal,
  useProjectsQueryKey,
} from "screens/project-list/util";
import { Project } from "types/project";
import { User } from "types/user";

interface ListProps extends TableProps<Project> {
  users: User[];
}

export const List = () => {
  const [val, setVal] = useState('');
  const btnClick = (e: any) => {
    setVal(val + 'one')
  }
  console.log('render level1')
  return (
    <React.Fragment>
      <div>
        <div>one Level: {val}</div>
        <Button onClick={btnClick} type="default">按钮1</Button>
        <Two val={val}></Two>
      </div>
    </React.Fragment>
  );
};

const Two = (props: {val: string}) => {
  const [val, setVal] = useState(props.val);
  const btnClick = (e: any) => {
    setVal(val + 'two')
  }
  console.log('render level2')
  return (
    <div>
      <div>two level: {val}</div>
      <Button onClick={btnClick} type="default">按钮2</Button>
    </div>
  )
}
