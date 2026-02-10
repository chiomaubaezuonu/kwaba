import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

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
    disabled: true,
  }
];

const DropDown: React.FC = () => (
  <Dropdown menu={{ items }}>
  <button type="button">
    <Space>
    Month
      <DownOutlined />
    </Space>
  </button>
</Dropdown>
);

export default DropDown;
