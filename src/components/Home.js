import React, { Component } from "react";
import styled from "styled-components";
import DataRender from "./DataRender";
import { Updater } from "./Updater";

const Table = styled.div`
  width: 60%;
  padding-left: 20%;
`;

export default class Home extends Component {
  render() {
    return (
      <Table>
        <DataRender></DataRender>
        <Updater></Updater>
      </Table>
    );
  }
}
