import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';

interface OriginalWord {
  size: string;
  word: string;
}

interface ConvertedWord {
  text: string;
  size: number;
}

const convertToWordCloudFormat = (originalData: OriginalWord[]): ConvertedWord[] => {
  return originalData.map((wordData) => ({
    text: wordData.word,
    size: parseInt(wordData.size)
  }));
};

interface WordCloudComponentProps {
  data: ConvertedWord[] | null;
}

const getColor = scaleOrdinal(schemeCategory10); // Using d3 color scheme

const WordCloudComponent: React.FC<WordCloudComponentProps> = ({ data }) => {
  const d3Container = useRef<SVGSVGElement | null>(null);

  const draw = (words: cloud.Word[]) => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current).select('g');
      svg.selectAll('text')
        .data(words)
        .enter().append('text')
        .style('font-size', (d: any) => `${d.size}px`)
        .style('fill', (d: any) => getColor(d.text)) // Apply color function here
        .attr('text-anchor', 'middle')
        .style('font-family', 'Impact')
        .attr('transform', (d: any) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text((d: any) => d.text);
    }
  };

  useEffect(() => {
    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const width = 500 - margin.left - margin.right; // Adjusted width
    const height = 300 - margin.top - margin.bottom; // Adjusted height

    if (d3Container.current && data) {
      const svg = d3.select(d3Container.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${(width + margin.left + margin.right) / 2},${(height + margin.top + margin.bottom) / 2})`); // Centering the SVG

      const layout = cloud<ConvertedWord>()
        .size([width, height])
        .words(data)
        .padding(10)  
        .rotate(() => (Math.random() > 0.5 ? 90 : 0))
        .fontSize(d => d.size * 3) // Increased font size
        .on('end', draw);

      layout.start();
    }
  }, [data]);

  return (
    <svg ref={d3Container}></svg>
  );
};

const WordCloud: React.FC<{ data: OriginalWord[] | null }> = ({ data }) => {
  const convertedData = data ? convertToWordCloudFormat(data) : null;

  return (
    <React.Fragment>
      <div className="order-3 col-span-6 2xl:order-1 card 2xl:col-span-6">
        <div className="card-body">
          <div className="flex items-center gap-2">
            <h6 className="mb-3 text-15 grow">WordCloud</h6>
            {/* Add additional controls or elements here if needed */}
          </div>
          <div className="overflow-hidden"> {/* Ensures the card doesn't overflow */}
            <WordCloudComponent data={convertedData} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WordCloud;
