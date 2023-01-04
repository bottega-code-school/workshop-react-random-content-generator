import React from "react";

interface Props {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonGroup: React.FC<Props> = ({ options, value, onChange }) => (
  <div className="radio-btn-group">
    {options.map((option) => (
      <label key={option.value}>
        <input
          type="radio"
          value={option.value}
          checked={option.value === value}
          onChange={onChange}
        />
        {option.label}
      </label>
    ))}
  </div>
);

export default RadioButtonGroup;
