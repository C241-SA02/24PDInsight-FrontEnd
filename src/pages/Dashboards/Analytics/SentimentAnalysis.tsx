import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, Rectangle, BarProps } from 'recharts';

const SentimentAnalysis = () => {
  const data = [
    { name: 'Positive', value: 0.041 },
    { name: 'Neutral', value: 0.651 },
    { name: 'Negative', value: 0.308 },
  ];

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
      <div className="order-3 col-span-6 2xl:order-1 card 2xl:col-span-6">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">Sentiment Analysis</h6>
          </div>
          <div>
            <BarChart
              layout="vertical"
              width={400}
              height={300}
              data={data}
            >
              
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Bar dataKey="value" shape={renderCustomizedBar}>
                {data.map((entry, index) => {
                  let color;
                  if (entry.name === 'Positive') color = '#00C49F'; // Green
                  if (entry.name === 'Neutral') color = '#FFBB28'; // Yellow
                  if (entry.name === 'Negative') color = '#FF4042'; // Red
                  return <Cell key={`cell-${index}`} fill={color} />;
                })}
              </Bar>
            </BarChart>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SentimentAnalysis;
