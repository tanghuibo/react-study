import React, { useState } from "react";
import MultipleSelect from "./components/MultipleSelect";
import { Select, Divider } from "antd";


const options = [];
for (let i = 0; i < 5; i++) {
  options.push({ label: "x" + i, value: "x" + i });
}

const MultipleSelectView = () => {
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);
  const [value3, setValue3] = useState([]);
  
  const { Option } = Select;
  return (
    <div>
      <Divider>通过属性设置 options</Divider>
      <MultipleSelect
        value={value1}
        onChange={setValue1}
        maxTagCount="responsive"
        style={{ width: 300 }}
        options={options}
      />
      <Divider>通过 children 设置 options，并设置 allOptionValues</Divider>
      <MultipleSelect
        value={value2}
        onChange={setValue2}
        allOptionValues={options.map((item) => item.value)}
        maxTagCount="responsive"
        style={{ width: 300 }}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </MultipleSelect>

      <Divider>通过 children 设置 options，未设置 allOptionValues</Divider>
      <MultipleSelect
        value={value3}
        onChange={setValue3}
        maxTagCount="responsive"
        style={{ width: 300 }}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </MultipleSelect>
    </div>
  );
};

export default MultipleSelectView;
