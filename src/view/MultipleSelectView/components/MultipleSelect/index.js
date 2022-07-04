import React from "react";
import { Select, Divider, Checkbox } from "antd";

const MultipleSelect = ({
  value,
  onChange,
  children,
  options,
  allOptionValues,
  ...props
}) => {
  allOptionValues = allOptionValues || options?.map((item) => item.value) || [];

  let checkAll = false;
  let indeterminate = false;
  if(value != null && value.length > 0 && allOptionValues.length > 0) {
    checkAll = value.length === allOptionValues.length;
    indeterminate = !checkAll;
  }
  
  const changeCheckBox = () => {
    if (checkAll) {
      onChange([]);
    } else {
      onChange(allOptionValues);
    }
  };
  return (
    <Select
      {...props}
      onChange={onChange}
      options={options}
      value={value}
      mode="multiple"
      dropdownRender={(menu) => (
        <>
          {allOptionValues.length > 0 && (
            <>
              <div style={{ textAlign: "right" }}>
                <Checkbox
                  onChange={changeCheckBox}
                  indeterminate={indeterminate}
                  checked={checkAll}
                  style={{ marginRight: 12 }}
                />
              </div>
              <Divider style={{ margin: "0 0" }} />
            </>
          )}
          {menu}
        </>
      )}
    >
      {children}
    </Select>
  );
};

export default MultipleSelect;
