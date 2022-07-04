import React from "react";
import { Divider } from "antd";
import HighlightWord from "./components/HighlightWord/index";

const { replaceHighlightWord } = HighlightWord;

const wordList = [
  {
    key: "我",
    style: {
      color: "blue",
    },
  },
  "高亮词1",
  {
    key: "高亮词2",
    style: {
      color: null,
      backgroundColor: "yellow",
    },
  },
  {
    key: "高亮词3",
    style: {
      color: "#eaff8f",
      backgroundColor: "black",
    },
  },
];
const text = "我是高亮词1，我是高亮词2，我是高亮词3";

const HighlightWordView = () => {
  return (
    <div>
      <Divider>使用 HighlightWord 组件</Divider>
      <HighlightWord wordList={wordList}> {text} </HighlightWord>

      <Divider>使用 replaceHighlightWord 方法</Divider>
      {replaceHighlightWord(text, wordList)}
    </div>
  );
};

export default HighlightWordView;
