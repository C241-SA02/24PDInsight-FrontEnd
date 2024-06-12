import React from 'react';
import ContentLoader from "react-content-loader"

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
                            <ContentLoader
                                speed={1.5}
                                width={1080}
                                height={84}
                                viewBox="0 0 1080 84"
                                backgroundColor="#9e9e9e"
                                foregroundColor="#ffffff"
                            >
                                <rect x="14" y="5" rx="3" ry="3" width="67" height="11" />
                                <rect x="76" y="5" rx="3" ry="3" width="140" height="11" />
                                <rect x="127" y="53" rx="3" ry="3" width="53" height="11" />
                                <rect x="187" y="53" rx="3" ry="3" width="72" height="11" />
                                <rect x="18" y="53" rx="3" ry="3" width="100" height="11" />
                                <rect x="18" y="28" rx="3" ry="3" width="140" height="11" />
                                <rect x="166" y="28" rx="3" ry="3" width="173" height="11" />
                                <rect x="332" y="5" rx="3" ry="3" width="53" height="11" />
                                <rect x="392" y="5" rx="3" ry="3" width="72" height="11" />
                                <rect x="223" y="5" rx="3" ry="3" width="100" height="11" />
                                <rect x="266" y="53" rx="3" ry="3" width="67" height="11" />
                                <rect x="342" y="53" rx="3" ry="3" width="140" height="11" />
                                <rect x="598" y="53" rx="3" ry="3" width="53" height="11" />
                                <rect x="658" y="53" rx="3" ry="3" width="72" height="11" />
                                <rect x="489" y="53" rx="3" ry="3" width="100" height="11" />
                                <rect x="348" y="28" rx="3" ry="3" width="140" height="11" />
                                <rect x="604" y="28" rx="3" ry="3" width="53" height="11" />
                                <rect x="664" y="28" rx="3" ry="3" width="72" height="11" />
                                <rect x="495" y="28" rx="3" ry="3" width="100" height="11" />
                                <rect x="583" y="5" rx="3" ry="3" width="53" height="11" />
                                <rect x="643" y="5" rx="3" ry="3" width="72" height="11" />
                                <rect x="474" y="5" rx="3" ry="3" width="100" height="11" />
                                <rect x="722" y="5" rx="3" ry="3" width="67" height="11" />
                                <rect x="740" y="5" rx="3" ry="3" width="67" height="11" />
                            </ContentLoader>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Summarization;