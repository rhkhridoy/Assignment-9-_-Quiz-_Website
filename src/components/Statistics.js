import React, { useContext } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { TopicContext } from "../Root";

const Statistics = () => {
  const topicsData = useContext(TopicContext);
  const topics = topicsData.data;

  return (
    <div className="mx-auto text-center py-[100px]">
      <h2 className="text-4xl mb-8 text-center text-blue-700 font-bold">
        Statistics Chart
      </h2>
      <div className="mx-auto text-center" style={{width:'100%', height:'300px'}}>
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={topics}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="total" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
