import React, { Component, useEffect } from "react";
import { Data } from "./components/Data";
import { Updater } from "./components/Updater";

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
