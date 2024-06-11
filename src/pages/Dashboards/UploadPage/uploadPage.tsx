import React, { useEffect , useState } from "react";
import * as Yup from 'yup';
import { useFormik } from "formik";
import axios from 'axios';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebaseConfig"
import { useNavigate } from 'react-router-dom';

const UploadPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uid, setUid] = useState<String | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uid = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });

    return () => uid();
  }, [auth]);

  useEffect(() => {
    if (uid !== null) {
      // console.log("userid : ", uid);
    }
  }, [uid]);
    

  const submitHandler = async (values:any) => {
    setIsLoading(true);
    let responseData;

    if (values.myFile) {
      try {
        const uploadResponse = await axios.post(`/api/upload`, {
          file: values.myFile,
          uid: uid
        }, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log('Response:', uploadResponse);
        responseData = uploadResponse.data;
      } catch (error) {
        console.error('Error to upload files: ', error);
        setIsLoading(false);
        throw error;
      }
    }

    if (values.link) {
      try {
        const response = await axios.post("/api/upload", {
          link: values.link,
          uid: uid
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Response:', response.data);
        responseData = response.data;
      } catch (error) {
        console.error('Error posting link:', error);
        setIsLoading(false);
        throw error;
      }
    }

    setIsLoading(false);

    // Redirect to "/analytics" with uid and response data
    navigate('/analytics', {
      state: {
        uid: uid,
        transcribeid: responseData.docid
      }
    });
  };

  const handleChangeLink = (event: any) => {
    const { target } = event
    validation.setFieldValue(target.name, target.value);
  }

  const handleChangeFile = (e: any) => {
    validation.setFieldValue('myFile', e.target.files[0]);
  };

  const validation: any = useFormik({
    initialValues: {
      myFile: '',
      link: ''
    },
    onSubmit: (values: any) => {
      submitHandler(values);
    },
    validationSchema: Yup.object().shape({
      myFile: Yup.mixed()
        .test('fileRequired', 'Either file or link is required', function (value) {
          const { link } = this.parent;
          if (!value && !link) {
            return false;
          }
          return true;
        })
        .test('fileFormat', 'Only .mp3 or .wav files are allowed', (value: any) => {
          if (value) {
            const supportedFormats = ['mp3', 'wav'];
            return supportedFormats.includes(value.name.split('.').pop());
          }
          return true;
        })
        .test('fileSize', 'File size must not be more than 3MB', (value: any) => {
          if (value) {
            return value.size <= 3145728;
          }
          return true;
        }),
      link: Yup.string()
        .test('linkRequired', 'Either file or link is required', function (value: any) {
          const { myFile } = this.parent;
          if (!value && !myFile) {
            return false;
          }
          return true;
        })
        .matches(/^https:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/)?([a-zA-Z0-9-_]{11})/, {
          message: 'Invalid YouTube link format',
          excludeEmptyString: true, // This ensures empty string passes the format check
        }),
    })
  });

  const [uploadType, setUploadType] = useState<'file' | 'link'>('file'); // Default to file upload

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUploadType = e.target.value as 'file' | 'link';
    setUploadType(newUploadType);

    // Reset Form Value
    if (newUploadType === 'file') {
      validation.setFieldValue('myFile', '');
      validation.setFieldValue('link', '');
    } else {
      validation.setFieldValue('myFile', '');
      validation.setFieldValue('link', '');
    }
  };

  return (
    <React.Fragment>
      <div className="mb-0 w-screen lg:mx-auto lg:w-[750px] card shadow-lg border-none shadow-slate-100 dark:shadow-zink-500/20 relative">
        <div className="card-body">
          <div className="flex items-center">
            <div className="card-body w-auto flex-auto">
              <h1 className="flex justify-center mb-12">Speech Analytics</h1>
              <div className="flex">
                <div className="mx-auto max-w-2xl px-4">
                  <form method="POST"
                    onSubmit={(event) => {
                      event.preventDefault();
                      validation.handleSubmit();
                    }}
                  >
                    {/* Choose Input */}
                    <h5 className="text-bold text-black mb-2">Choose Input: </h5>
                    <div className="flex-inline flex-nowrap gap-2 mb-8">
                      <div className="mx-auto max-w-6xl px-6">
                        <div className="flex flex-wrap gap-3">
                          <label className="cursor-pointer">
                            <input
                              type="radio"
                              className="peer sr-only"
                              name="uploadType"
                              value="file"
                              checked={uploadType === 'file'}
                              onChange={handleRadioChange}
                            />
                            <div className="w-72 max-w-xl rounded-md bg-white p-5 text-gray-600 dark:bg-blackpearl-900 dark:text-white ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-400 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-semibold uppercase text-gray-500 dark:text-white">
                                    File Input
                                  </p>
                                  <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                      <path
                                        fill="currentColor"
                                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex items-end justify-between">
                                  <p>
                                    <span className="text-lg font-bold">.mp3 or .wav</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </label>
                          <label className="cursor-pointer">
                            <input
                              type="radio"
                              className="peer sr-only"
                              name="uploadType"
                              value="link"
                              checked={uploadType === 'link'}
                              onChange={handleRadioChange}
                            />
                            <div className="w-72 max-w-xl rounded-md bg-white p-5 text-gray-600 dark:bg-blackpearl-900 dark:text-white ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-semibold uppercase text-gray-500 dark:text-white">
                                    Link Input
                                  </p>
                                  <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24">
                                      <path
                                        fill="currentColor"
                                        d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                                      />
                                    </svg>
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
                      {uploadType === 'file' ? (
                        <div>
                          <input
                            type="file"
                            className="cursor-pointer form-file border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500"
                            placeholder=""
                            accept=""
                            name="myFile"
                            onChange={handleChangeFile}
                          />
                          <div>{(validation.errors.myFile) ? <p className="text-red-600 mt-2">{validation.errors.myFile}</p> : null}</div>
                        </div>
                      ) : (
                        <div>
                          <input
                            type="text"
                            id="inputPlaceholder"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Input Your YouTube Link Here"
                            name="link"
                            value={validation.values.link}
                            onChange={handleChangeLink}
                          />
                          {validation.errors.link && validation.touched.link && (
                            <div className="text-red-600 mt-2">{validation.errors.link}</div>
                          )}
                        </div>
                      )}
                      {/* Submit Button */}
                      <div className="flex justify-center">
                        <button
                          type="submit"
                          className={`text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 px-10 flex-shrink mt-8 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                          disabled={isLoading}
                        >
                          {isLoading ? 'Uploading...' : 'Upload'}
                        </button>

                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};



export default UploadPage;
