import React, { useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
// import WelcomeWidget from './WelcomeWidget';
// import OrderStatistics from './OrderStatistics';
// import Widgets from './Widgets';
// import SalesRevenue from './SalesRevenue';
// import TrafficResources from './TrafficResources';
// import ProductsOrders from './ProductsOrders';
// import CustomerService from './CustomerService';
// import SalesMonth from './SalesMonth';
// import TopSellingProducts from './TopSellingProducts';
// import Audience from './Audience';
import Index from './smth';
import { useNavigate } from 'react-router-dom';

const Ecommerce = () => {

    const navigate = useNavigate();
    useEffect(() => navigate("/upload"), [navigate]);

    return (
        <React.Fragment>
            <BreadCrumb title='Ecommerce' pageTitle='Upload Files' />
            {/* <div className="grid grid-cols-3"> */}
                <Index/>


                {/* <WelcomeWidget />
                <OrderStatistics />
                <Widgets />
                <SalesRevenue />
                <TrafficResources />
                <ProductsOrders />
                <CustomerService />
                <SalesMonth />
                <TopSellingProducts /> */}
                {/* <Audience /> */}
            {/* </div> */}
        </React.Fragment>
    );
};

export default Ecommerce;
