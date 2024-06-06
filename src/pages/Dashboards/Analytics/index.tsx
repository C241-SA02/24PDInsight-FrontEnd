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
  const nerAnalysis = `kita harus bersyukur di tahun 2020 [Angka] sampai 2030 [Angka] nanti kita akan mendapatkan bonus demografi . saat itulah sebagian besar penduduk kita ada pada usia produktif . ini kesempatan kita untuk meningkatkan produktivitas nasional . peluang untuk menuju indonesia [Entitas Geologi] emas makin terbuka lebar . tapi bapak - ibu yang saya hormat ##i , teman - teman sesama anak muda , ingat , kesempatan ini hanya datang sekali . kesempatan ini tidak akan ter ##ulang lagi . untuk itu kita harus kerja keras , kerja fokus , berani melakukan lompatan . saya uc ##apkan terima kasih kepada pak [Orang] prabowo [Orang] , yang sudah memberi saya kesempatan untuk ikut andil dalam kontes ##tasi ini . saya sangat bangga sekali saya menjadi bagian dalam perjalanan menuju indonesia [Entitas Geologi] emas [Entitas Geologi] . saya uc ##apkan terima kasih juga prof [Orang] . mah [Orang] ##fu ##d , gu ##z ##mu ##hay ##min [Orang] . saya sangat senang sekali bisa satu [Angka] panggung dengan orang - orang hebat seperti ini . senang sekali anak muda bisa bertukar pikiran dengan ketua umum partai [Organisasi] dan seorang profesor . sekali lagi terima kasih . anak - anak muda harus saling mendukung , anak - anak muda harus saling berga ##nd ##engan tangan . saya yakin indo [Orang] ins [Orang] ##yar ##mus bisa tercapai . terima kasih . wass ##alam ##u alai [Orang] ##kum wara ##h ##mat ##ullah ##i wa ##bara ##kat ##uh . selamat natal [Orang] dan tahun baru . terima kasih telah menonton !`;

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
