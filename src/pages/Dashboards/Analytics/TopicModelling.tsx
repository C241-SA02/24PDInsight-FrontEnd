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

  return (
    <React.Fragment>
      <div className="order-2 col-span-6 2xl:order-1 card 2xl:col-span-5">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">Topic Modelling</h6>
          </div>
          <div>
            {isLoading ? ( // Tampilkan pesan loading jika isLoading true
              <p>Loading...</p>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopicModelling;
