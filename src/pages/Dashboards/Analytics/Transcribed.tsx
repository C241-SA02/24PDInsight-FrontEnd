import React, { useState } from 'react';

const Transcribed: React.FC<{ data: string | null }> = ({ data }) => {
    const [error] = useState<string | null>(null);

    return (
        <React.Fragment>
            <div className="order-1 col-span-12 2xl:order-1 card 2xl:col-span-7">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                        <h6 className="mb-3 text-15 grow">Transcribed</h6>
                    </div>
                    <div>
                        {error && <p className="text-red-500">{error}</p>}
                        {data ? (
                            <p>{data}</p>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Transcribed;
