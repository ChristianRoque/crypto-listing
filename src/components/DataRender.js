import React, { Component } from "react";
import { Data } from "./Data";
import { Updater } from "./Updater";

export default class DataRender extends Component {
  render() {
    return (
      <div>
        <Data></Data>
        <Updater></Updater>
      </div>
    );
  }
}
