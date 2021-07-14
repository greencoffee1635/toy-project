import React, { Component } from "react";

class Try extends Component {
  render() {
    const { tryInfo } = this.props; // 구조 분해 문법 변수명이랑 키값이 같으면 생략되는/..
    // const tryInfo = this.props.tryInfo;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

export default Try;
