
import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const MyForm = () => {
  const validationRules = Yup.object().shape({
    myFile: Yup.mixed().required('required')
      .test('fileFormat', 'Only PDF files are allowed', (value:any) => {
        console.log(value);
        if (value) {
          const supportedFormats = ['pdf'];
          return supportedFormats.includes(value.name.split('.').pop());
        }
        return true;
      })
      .test('fileSize', 'File size must not be more than 3MB', 
      (value:any) => {
        if (value) {
          return value.size <= 3145728;
        }
        return true;
      }),
  })

  const formik = useFormik({
    initialValues: {
      myFile: ''
    },
    onSubmit: () => {
        console.log();
        
    //   console.log('Submitted')
    },
    validationSchema: validationRules,
  })

  const handleChange = (e: any) => {
    formik.setFieldValue('myFile', e.target.files[0]);
  };
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <input type='file' name='myFile' accept='.pdf' onChange={handleChange}/>

      <div>{(formik.errors.myFile) ? <p style={{color: 'red'}}>{formik.errors.myFile}</p> : null}</div>
      <br/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default MyForm