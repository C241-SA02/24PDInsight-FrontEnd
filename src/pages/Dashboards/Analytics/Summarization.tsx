import React from 'react';
import { Dropdown } from 'Common/Components/Dropdown';
import { ChevronDown } from 'lucide-react';
import { InteractionChart } from './Charts';
import { Link } from 'react-router-dom';

const Summarization = () => {
    const data = [
        { summarize: 'terima kasih, dan selanjutnya kami mewakili pasangan presiden nomor 2 untuk merespon tanggapan dari kedua calon presiden lainnya. dan waktu 1 menit, bapak dimulai dari sekarang.'}
      ];

    return (
        <React.Fragment>
            <div className="order-1 col-span-12 2xl:order-1 card 2xl:col-span-12">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                        <h6 className="mb-3 text-15 grow">Summarization</h6>
                    </div>
                    <div>
                        {data.map((item, index) => (
                            <p key={index}>{item.summarize}</p>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Summarization;
