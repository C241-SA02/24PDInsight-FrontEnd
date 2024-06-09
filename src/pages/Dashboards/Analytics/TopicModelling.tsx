import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TopicModelling = () => {
  const data = [
    {
      importance: 0.04,
      topic_id: 1,
      word: "faktor",
      word_count: 8,
    },
    {
      importance: 0.077,
      topic_id: 0,
      word: "adil",
      word_count: 0,
    },
    {
      importance: 0.090,
      topic_id: 0,
      word: "tes",
      word_count: 0,
    },

  ];

  return (
    <React.Fragment>
      <div className="order-2 col-span-6 2xl:order-1 card 2xl:col-span-5">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">Topic Modelling</h6>
          </div>
          <div>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="word" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="importance" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopicModelling;
