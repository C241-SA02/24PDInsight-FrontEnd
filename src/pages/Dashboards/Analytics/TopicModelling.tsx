import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  Rectangle
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

  const renderCustomizedBar = (props: any) => {
    const { fill, x, y, width, height } = props;
    const radius = 10; // Set the radius for rounded corners
    return (
      <Rectangle
        x={x as number}
        y={y as number}
        width={width as number}
        height={height as number}
        fill={fill}
        radius={[radius, radius, radius, radius]}
      />
    );
  };

  return (
    <React.Fragment>
      <div className="order-5 col-span-6 2xl:order-1 card 2xl:col-span-6">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">Topic Modelling - Topic 0</h6>
          </div>
          <div>
            {isLoading ? (
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
                <XAxis dataKey="word" />
                <YAxis domain={[0, 0.1]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="importance" shape={renderCustomizedBar} fill="#8884d8">
                  {dataTopic0.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#8884d8" />
                  ))}
                </Bar>
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
            {isLoading ? (
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
                <XAxis dataKey="word" />
                <YAxis domain={[0, 0.1]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="importance" shape={renderCustomizedBar} fill="#82ca9d">
                  {dataTopic1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#82ca9d" />
                  ))}
                </Bar>
              </BarChart>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopicModelling;
