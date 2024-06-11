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

interface TopicModellingProps {
  data: any[] | null;
}

const TopicModelling: React.FC<TopicModellingProps> = ({ data }) => {
  // Tentukan variabel isLoading
  const isLoading = data === null;

  // Filter data berdasarkan topic_id jika data tidak null
  const dataTopic0 = data ? data.filter(item => item.topic_id === 0) : [];
  const dataTopic1 = data ? data.filter(item => item.topic_id === 1) : [];

  return (
    <React.Fragment>
      <div className="order-5 col-span-6 2xl:order-1 card 2xl:col-span-6">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">Topic Modelling - Topic 0</h6>
          </div>
          <div>
            {isLoading ? ( // Tampilkan pesan loading jika isLoading true
              <p>Loading...</p>
            ) : (
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
            )}
          </div>
        </div>
      </div>

      <div className="order-6 col-span-6 2xl:order-1 card 2xl:col-span-6">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">Topic Modelling - Topic 1</h6>
          </div>
          <div>
            {isLoading ? ( // Tampilkan pesan loading jika isLoading true
              <p>Loading...</p>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopicModelling;
