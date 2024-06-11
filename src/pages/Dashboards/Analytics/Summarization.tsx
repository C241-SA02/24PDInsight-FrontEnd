import React from 'react';

const Summarization: React.FC<{ data: string | null }> = ({ data }) => {
    return (
        <React.Fragment>
            <div className="order-1 col-span-12 2xl:order-1 card 2xl:col-span-12">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                        <h6 className="mb-3 text-15 grow">Summarization</h6>
                    </div>
                    <div>
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

export default Summarization;