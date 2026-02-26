import React, { useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

type DefaultDropDown = "Month" | "Year";
interface DropdownProp {
  defaultValue: DefaultDropDown;
}

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Month
      </a>
    ),
    onMouseEnter: (info) => {
      info.domEvent.currentTarget.style.backgroundColor = "#87cfeb33";
    },
    onMouseLeave: (info) => {
      info.domEvent.currentTarget.style.backgroundColor = "transparent";
    },
  },

  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Year
      </a>
    ),
    onMouseEnter: (info) => {
      info.domEvent.currentTarget.style.backgroundColor = "#87cfeb33";
    },
    onMouseLeave: (info) => {
      info.domEvent.currentTarget.style.backgroundColor = "transparent";
    },
  },
];

const DropDown: React.FC<DropdownProp> = ({ defaultValue }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      menu={{ items }}
      open={open}
      onOpenChange={(flag) => setOpen(flag)}
      trigger={["click"]}
      overlayClassName="custom-dropdown"
    >
      <button
        type="button"
        className="bg-[#EBF2F3] hover:shadow-[0_0_0.3rem_rgba(0,0,0,0.1)] cursor-pointer text-[#31ADbD] text-[0.808rem]  pt-[0.285rem] pr-[1.565rem] pb-[0.285rem] pl-[0.665rem] rounded-2xl"
      >
        <Space size={"middle"}>
          {defaultValue}
          <DownOutlined
            className={`text-[0.54rem] font-bold transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </Space>
      </button>
    </Dropdown>
  );
};

export default DropDown;
