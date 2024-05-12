import React from "react";


const Index = () => {
    return (
        <React.Fragment>
            <div className=" mb-0 w-screen lg:mx-auto lg:w-[750px] card shadow-lg border-none shadow-slate-100 dark:shadow-zink-500/20 relative">
                <div className="card-body">
                    <div className="flex items-center">
                        <div className="card-body w-auto flex-auto">
                            <h1 className="flex justify-center mb-12">Speech Analytics</h1>
                            <div className="flex">
                                <div className="mx-auto max-w-2xl px-4">
                                    {/* Choose Input */}
                                    <h5 className="text-bold text-black mb-2">Choose Input: </h5>
                                    <div className="flex-inline flex-nowrap gap-2 mb-8">
                                        <div className="mx-auto max-w-6xl px-6">
                                            <div className="flex flex-wrap gap-3">
                                                <label className="cursor-pointer">
                                                    <input type="radio" className="peer sr-only" name="pricing" />
                                                    <div className="w-72 max-w-xl rounded-md bg-white p-5 text-gray-600 dark:bg-black-pearl-500 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                                        <div className="flex flex-col gap-1">
                                                            <div className="flex items-center justify-between">
                                                                <p className="text-sm font-semibold uppercase text-gray-500">File Input</p>
                                                                <div>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-end justify-between">
                                                                <p><span className="text-lg font-bold">.mp3 or .wav</span></p>
                                                                {/* <p className="text-sm font-bold">$12 / mo</p> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                                <label className="cursor-pointer">
                                                    <input type="radio" className="peer sr-only" name="pricing" />
                                                    <div className="w-72 max-w-xl rounded-md bg-white p-5 text-gray-600 dark: ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                                        <div className="flex flex-col gap-1">
                                                            <div className="flex items-center justify-between">
                                                                <p className="text-sm font-semibold uppercase text-gray-500">Link Input</p>
                                                                <div>
                                                                    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-end justify-between">
                                                                <span className="text-lg font-bold">Youtube</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Input */}
                                    <div className="flex-auto w-auto">
                                        <div>
                                            <input type="file" className="mb-6 cursor-pointer form-file border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500" placeholder="Enter your name" />
                                        </div>

                                        {/* Radio */}
                                        {/* <div className="flex justify-center mb-4">
                                            <input type="checkbox" name="sentiment" id="sentiment" className="" /><label htmlFor="sentiment" className="mx-2 me-4"> Sentiment Analysis</label>
                                            <input type="checkbox" name="ner" id="ner" /><label htmlFor="ner" className="mx-2 me-4">NER</label>
                                            <input type="checkbox" name="tm" id="tm" /><label htmlFor="tm" className="mx-2 me-4">Topic Modelling</label>
                                        </div> */}
                                        {/* Convert Button */}
                                        <div className="flex justify-center">
                                            <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 px-10 flex-shrink">Upload</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Index;