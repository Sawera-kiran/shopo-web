import "./CustomSelect.css";

import Select from "react-select";

function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select...",
}) {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      isSearchable={false}
      className="custom-select"
      classNamePrefix="custom-select"
    />
  );
}

export default CustomSelect;