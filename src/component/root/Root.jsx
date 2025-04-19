import React from 'react';
import Header from '../roor/header/Header';
import { Outlet } from 'react-router';
import Footer from '../roor/footer/Footer';
import SideBar from '../sideBar/SideBar';
import  './root.css'

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>

                <SideBar></SideBar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;