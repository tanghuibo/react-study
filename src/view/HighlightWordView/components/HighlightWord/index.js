import React from "react";

const DEFAULT_COLOR = 'red';

const replaceHighlight = (text, word) => {
    if (word == null) {
        return [text];
    }
    if (typeof (word) === 'string') {
        word = { key: word };
    }
    let { key = "", style = {} } = word;
    if (typeof (text) !== 'string' || key.length === 0) {
        return [text];
    }

    style = { color: DEFAULT_COLOR, ...style };
    let beforeIndex = 0;
    let index = text.indexOf(key);
    let resultList = [];
    while (index >= 0) {
        if (index > beforeIndex) {
            resultList.push(text.substring(beforeIndex, index));
        }
        resultList.push({ text: key, style });
        beforeIndex = index + key.length;
        index = text.indexOf(key, beforeIndex);
    }
    if (text.length > beforeIndex) {
        resultList.push(text.substring(beforeIndex, text.length));
    }
    return resultList;
}

const replaceHighlightWord = (text, wordList) => {
    let resultList = [text];
    for (const word of wordList) {
        resultList = resultList.flatMap(result => replaceHighlight(result, word));
    }
    return <span>{resultList.map((item, index) => typeof (item) === 'string' ? item : (<span key={`${item.text}_${index}`} style={item.style}>{item.text}</span>))}</span>;
}

const HighlightWord = ({
    children, wordList = []
}) => {
    return replaceHighlightWord(children instanceof Array ? children.join('') : children, wordList)
}

HighlightWord.replaceHighlightWord = replaceHighlightWord;

export default HighlightWord;