import React, { useEffect, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import { useLocation } from 'react-router-dom';
import Transcribed from './Transcribed';
import SentimentAnalysis from './SentimentAnalysis';
import NamedEntityRecognition from './NamedEntityRecognition';
import TopicModelling from './TopicModelling';
import Summarization from './Summarization';
import WordCloud from './WordCloud';
import axios from 'axios';

interface Props {}

const Analytics: React.FC<Props> = () => {
  const location = useLocation();
  const { uid, transcribeid } = location.state || {};
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log(uid);
      console.log(transcribeid);

      try {
        const response = await axios.get('/api/getdata', {
          params: {
            uid: uid,
            transcribeid: transcribeid,
          },
        });
        console.log('API Response:', response);
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    if (isFetching) {
      const intervalId = setInterval(() => {
        fetchData();
      }, 2000);

      fetchData(); // Initial fetch

      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [uid, transcribeid, isFetching]);

  useEffect(() => {
    if (data && Object.keys(data).length >= 9) {
      setIsFetching(false); // Stop fetching when the condition is met
      console.log("Data fetching completed.");
    }
  }, [data]);

  return (
    <React.Fragment>
      <BreadCrumb title='Analytics' pageTitle='Analytics' />
      <div className="grid grid-cols-12 gap-x-5">
        <Summarization data={data ? data.summarize : null} />
        <Transcribed data={data ? data.transcribe : null} />
        <SentimentAnalysis data={data ? data.sentiment : null} />
        <WordCloud data={data ? data.wordcloud : null} />
        <TopicModelling data={data ? data.topicModel : null} />
        <NamedEntityRecognition nerAnalysis={data ? data.entity : null} />
      </div>
    </React.Fragment>
  );
};

export default Analytics;
