import { Table } from "antd";
import React from "react";

const TableV1 = (props) => {
  const { columns, data } = props;
  return <Table columns={columns} dataSource={data} />;
};
export default TableV1;
