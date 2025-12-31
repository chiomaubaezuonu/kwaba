import React from "react";

type InputType = "text" | "password" | "email" | "checkbox";
interface InputProps {
  htmlType: InputType;
  placeholder?: string;
  className?: string;
  value?: string | number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const Input = ({
  htmlType,
  placeholder,
  className = "",
  value,
  name,
  onChange,
}: InputProps) => {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={htmlType}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
