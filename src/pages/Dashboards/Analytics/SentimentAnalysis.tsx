import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


interface SentimentData {
  name: string;
  value: number;
}

const SentimentAnalysis: React.FC<{ data: string | null }> = ({ data }) => {
  const mapData = (data: any): SentimentData[] => {
    return data.map((item: any) => ({
      name: capitalizeFirstLetter(item.label),
      value: item.score
    }));
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  return (
    <React.Fragment>
      <div className="order-2 col-span-6 2xl:order-1 card 2xl:col-span-5">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">Sentiment Analysis</h6>
          </div>
          <div>
          <BarChart width={400} height={300} data={data ? mapData(data) : []}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SentimentAnalysis;