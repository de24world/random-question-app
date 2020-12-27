import React from "react";
import "./App.scss";

import AppHeader from "./components/AppHeader/AppHeader";
import QuestionCard from "./components/QuestionCard/QuestionCard";

import { Row, Col } from "antd";
import { Layout } from "antd";
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Row>
          <Col xs={3} sm={6} lg={8}>
            1
          </Col>
          <Col xs={18} sm={12} lg={8}>
            2
            <QuestionCard />
          </Col>
          <Col xs={3} sm={6} lg={8}>
            3
          </Col>
        </Row>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
