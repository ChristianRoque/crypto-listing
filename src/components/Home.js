import React, { Component } from "react";
import styled from "styled-components";
import DataRender from "./DataRender";
import Settings from "./Settings";
import { Updater } from "./Updater";

const Table = styled.div`
  width: 85%;
`;
const Body = styled.div`
  display: flex;
`;

export default class Home extends Component {
  render() {
    return (
      <Body className="page">
        <Settings></Settings>
        <Table>
          <DataRender></DataRender>
          <Updater></Updater>
        </Table>
      </Body>
    );
  }
}
