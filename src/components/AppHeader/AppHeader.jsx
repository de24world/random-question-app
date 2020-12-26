import React from "react";

import { Menu } from "antd";

function AppHeader() {
  return (
    <div className="AppHeader">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Game 1</Menu.Item>
        <Menu.Item key="4">Game 2</Menu.Item>
      </Menu>
    </div>
  );
}

export default AppHeader;
