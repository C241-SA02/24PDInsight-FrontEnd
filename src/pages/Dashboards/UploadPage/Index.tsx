import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import UploadPage from './uploadPage';


const UploadCard = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Upload Files' pageTitle='Upload Files' />
                <UploadPage />
        </React.Fragment>
    );
};

export default UploadCard;
