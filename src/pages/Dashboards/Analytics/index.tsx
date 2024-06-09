import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import LocationBased from './LocationBased';
import Interaction from './Interaction';
import UserDevice from './UserDevice';
import Satisfaction from './Satisfaction';
import DailyVisit from './DailyVisit';
import Reports from './Reports';
import MonthlyCampaign from './MonthlyCampaign';
import Subscription from './Subscription';
import TrafficSource from './TrafficSource';
import ProductsStatistics from './ProductsStatistics';

import Transcribed from './Transcribed';
import SentimentAnalysis from './SentimentAnalysis';
import NamedEntityRecognition from './NamedEntityRecognition';
import TopicModelling from './TopicModelling';
import Summarization from './Summarization';
import WordCloud from './WordCloud';

const Analytics = () => {

  // Data for Named Entity Recognition
  const nerAnalysis = `terima kasih , dan selanjutnya kami persi ##lak ##an kembali kepada calon presiden nomor 2 [Angka] untuk merespon tanggapan dari kedua [Angka] calon presiden lainnya . dan waktu anda 1 [Jumlah] menit [Jumlah] , bapak dimulai dari sekarang . benar , saya sangat setuju . kita harus ada pendekatan dialog . benar , ya . dan saya juga setuju . harus . . . eh , tunggu dulu , aku mau jawab . jadi , benar keadilan . benar sekali , harus ada keadilan . tetapi , saya mau mengatakan , tidak sese ##der ##hana itu , pak anies [Orang] . ada faktor - faktor lain , pak [Orang] anies [Orang] . ada faktor geop ##olitik . ada faktor ideologi . inilah yang masalahnya tidak gamp ##ang . tetapi , saya pendapat , kita harus tegak ##kan keadilan . kita harus dialog . ini masalah bangsa . ini harus kita , semua kekuatan harus kita rangk ##ul .`;

  return (
    <React.Fragment>
      <BreadCrumb title='Analytics' pageTitle='Analytics'/>
      <div className="grid grid-cols-12 gap-x-5">
        <Transcribed></Transcribed>
        <SentimentAnalysis></SentimentAnalysis>
        <TopicModelling></TopicModelling>
        <NamedEntityRecognition nerAnalysis={nerAnalysis}></NamedEntityRecognition>
        <Summarization></Summarization>
        <WordCloud></WordCloud>
        {/* <Widgets /> */}
        {/* <LocationBased /> */}
        {/* <Interaction />
        <UserDevice />
        <Satisfaction />
        <DailyVisit />
        <ProductsStatistics />
        <Reports />
        <MonthlyCampaign />
        <Subscription />
        <TrafficSource />  */}
      </div>
    </React.Fragment>
  );
};

export default Analytics;
