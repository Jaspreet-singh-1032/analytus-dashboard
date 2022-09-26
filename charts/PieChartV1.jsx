import { Pie } from "@ant-design/plots";

const PieChartV1 = () => {
  const data = [
    {
      type: "data1",
      value: 27,
    },
    {
      type: "data2",
      value: 25,
    },
    {
      type: "data3",
      value: 18,
    },
    {
      type: "data4",
      value: 10,
    },
    {
      type: "data5",
      value: 5,
    },
    {
      type: "data6",
      value: 15,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default PieChartV1;
