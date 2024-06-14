import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, Rectangle } from 'recharts';
import { Oval } from 'react-loader-spinner';

interface SentimentData {
  name: string;
  value: number;
}

const SentimentAnalysis: React.FC<{ data: string | null }> = ({ data }) => {
  const mapData = (data: any): SentimentData[] => {
    return data.map((item: any) => ({
      name: capitalizeFirstLetter(item.label),
      value: Math.round(item.score * 100) // Membulatkan nilai dan mengalikan dengan 100
    }));
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

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

  const renderYAxisTick = (tickProps: any) => {
    const { x, y, payload } = tickProps;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={4}
          textAnchor="end"
          fill="#666"
        >
          {`${payload.value}`}
        </text>
      </g>
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
            {data ? (
              <div className="flex justify-center items-center h-full">
                <BarChart
                  layout="vertical"
                  width={600}  // Increased width
                  height={500} // Increased height
                  data={data ? mapData(data) : []}
                >
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" tick={renderYAxisTick} />
                  <Tooltip formatter={(value) => `${value}%`} /> {/* Menambahkan tanda "%" di tooltip */}
                  <Bar dataKey="value" shape={renderCustomizedBar}>
                    {data && mapData(data).map((entry, index) => {
                      let color;
                      if (entry.name === 'Positive') color = '#00C49F'; // Green
                      if (entry.name === 'Neutral') color = '#FFBB28'; // Yellow
                      if (entry.name === 'Negative') color = '#FF4042'; // Red
                      return <Cell key={`cell-${index}`} fill={color} />;
                    })}
                  </Bar>
                </BarChart>
              </div>
            ) : (
              <div className="flex justify-center items-center h-full">
                <Oval
                  height={500}
                  width={100}
                  color="#66a1ff"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#284066"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SentimentAnalysis;