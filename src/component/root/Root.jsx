import React from 'react';
import Header from '../roor/header/Header';
import { Outlet } from 'react-router';
import Footer from '../roor/footer/Footer';
import SideBar from '../sideBar/SideBar';
import './root.css';
import { useNavigation } from "react-router";

const Root = () => {
    const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                 {isNavigating&& <span>Loading...</span>}
                <SideBar></SideBar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;