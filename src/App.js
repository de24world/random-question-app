import React from "react";
import "./App.css";

import AppHeader from "./components/AppHeader/AppHeader";
import Card from "./components/Card/Card";

import { Layout } from "antd";
const { Header } = Layout;

const App = () => {
  return (
    <Layout calssName="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Card />
    </Layout>
  );
};

export default App;
