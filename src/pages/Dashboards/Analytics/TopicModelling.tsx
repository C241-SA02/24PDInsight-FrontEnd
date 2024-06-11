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
        importance: 0.077,
        topic_id: 0,
        word: "adil",
        word_count: 0,
    },
    {
        importance: 0.055,
        topic_id: 0,
        word: "anies",
        word_count: 1,
    },
    {
        importance: 0.055,
        topic_id: 0,
        word: "presiden",
        word_count: 17,
    },
    {
        importance: 0.055,
        topic_id: 0,
        word: "faktor",
        word_count: 8,
    },
    {
        importance: 0.055,
        topic_id: 0,
        word: "tuju",
        word_count: 23,
    },
    {
        importance: 0.04,
        topic_id: 1,
        word: "adil",
        word_count: 0,
    },
    {
        importance: 0.04,
        topic_id: 1,
        word: "calon",
        word_count: 3,
    },
    {
        importance: 0.04,
        topic_id: 1,
        word: "tuju",
        word_count: 23,
    },
    {
        importance: 0.04,
        topic_id: 1,
        word: "dialog",
        word_count: 6,
    },
    {
        importance: 0.04,
        topic_id: 1,
        word: "faktor",
        word_count: 8,
    }
];


  const dataTopic0 = data.filter(item => item.topic_id === 0);
  const dataTopic1 = data.filter(item => item.topic_id === 1);

  return (
    <React.Fragment>
      <div className="order-5 col-span-6 2xl:order-1 card 2xl:col-span-6">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">Topic Modelling - Topic 0</h6>
          </div>
          <div>
            <BarChart
              width={500}
              height={300}
              data={dataTopic0}
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

      <div className="order-6 col-span-6 2xl:order-1 card 2xl:col-span-6">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">Topic Modelling - Topic 1</h6>
          </div>
          <div>
            <BarChart
              width={500}
              height={300}
              data={dataTopic1}
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
              <Bar dataKey="importance" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopicModelling;
