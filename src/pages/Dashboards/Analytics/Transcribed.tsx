import React from 'react';

const Transcribed = () => {

    const data = [
        {
          createdAt: "2024-06-03 22:10:11",
          entity:"Terima kasih, dan selanjutnya kami persilakan kembali kepada calon presiden nomor 2 untuk merespon tanggapan dari kedua calon presiden lainnya. Dan waktu Anda 1 menit, Bapak dimulai dari sekarang. Benar, saya sangat setuju. Kita harus ada pendekatan dialog. Benar, ya. Dan saya juga setuju. Harus... Eh, tunggu dulu, aku mau jawab. Jadi, benar keadilan. Benar sekali, harus ada keadilan. Tetapi, saya mau mengatakan, tidak sesederhana itu, Pak Anies. Ada faktor-faktor lain, Pak Anies. Ada faktor geopolitik. Ada faktor ideologi. Inilah yang masalahnya tidak gampang. Tetapi, saya pendapat, kita harus tegakkan keadilan. Kita harus dialog. Ini masalah bangsa. Ini harus kita, semua kekuatan harus kita rangkul."
        }
      ];

    return (
        <React.Fragment>
            <div className="order-2 col-span-12 2xl:order-1 card 2xl:col-span-12">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                        <h6 className="mb-3 text-15 grow">Transcribed</h6>
                    </div>
                    <div>
                        {data.map((item, index) => (
                            <p key={index}>{item.entity}</p>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Transcribed;
