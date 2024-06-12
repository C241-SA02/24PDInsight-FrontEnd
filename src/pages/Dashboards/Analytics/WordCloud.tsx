import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import cloud from 'd3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { Oval } from 'react-loader-spinner';

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
    size: parseInt(wordData.size, 10)
  }));
};

interface WordCloudComponentProps {
  data: ConvertedWord[] | null;
}

const getColor = scaleOrdinal(schemeCategory10);

const WordCloudComponent: React.FC<WordCloudComponentProps> = ({ data }) => {
  const d3Container = useRef<SVGSVGElement | null>(null);

  const draw = (words: cloud.Word[]) => {
    if (d3Container.current) {
      const svg = d3.select(d3Container.current).select('g');
      svg.selectAll('text')
        .data(words)
        .enter().append('text')
        .style('font-size', (d: any) => `${d.size}px`)
        .style('fill', (d: any) => getColor(d.text))
        .attr('text-anchor', 'middle')
        .style('font-family', 'Impact')
        .attr('transform', (d: any) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text((d: any) => d.text);
    }
  };

  useEffect(() => {
    const margin = { top: 10, right: 10, bottom: 10, left: 10 };
    const width = 500 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    if (d3Container.current && data && data.length > 0) {
      d3.select(d3Container.current).selectAll('*').remove();

      const svg = d3.select(d3Container.current)
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .style('display', 'block')
        .append('g')
        .attr('transform', `translate(${(width + margin.left + margin.right) / 2},${(height + margin.top + margin.bottom) / 2})`);

      const layout = cloud<ConvertedWord>()
        .size([width, height])
        .words(data)
        .padding(2)
        .rotate(() => (Math.random() > 0.5 ? 90 : 0))
        .fontSize(d => d.size * 10)
        .on('end', draw);

      layout.start();
    }
  }, [data]);

  if (!data || data.length === 0) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Oval
          height={50}
          width={50}
          color="#66a1ff"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#284066"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg ref={d3Container}></svg>
    </div>
  );
};

const WordCloud: React.FC<{ data: OriginalWord[] | null }> = ({ data }) => {
  const convertedData = data ? convertToWordCloudFormat(data) : null;

  return (
    <div className="order-3 col-span-6 2xl:order-1 card 2xl:col-span-6">
      <div className="card-body">
        <div className="flex items-center gap-2">
          <h6 className="mb-3 text-15 grow">WordCloud</h6>
        </div>
        <div className="overflow-hidden" style={{ width: '100%', height: '500px' }}>
          <WordCloudComponent data={convertedData} />
        </div>
      </div>
    </div>
  );
};

export default WordCloud;
