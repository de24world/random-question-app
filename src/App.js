import React from "react";
import "./App.scss";

import AppHeader from "./components/AppHeader/AppHeader";
import QuestionCard from "./components/QuestionCard/QuestionCard";

import { Layout } from "antd";
const { Header } = Layout;

const App = () => {
  return (
    <Layout calssName="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <QuestionCard />
    </Layout>
  );
};

export default App;
