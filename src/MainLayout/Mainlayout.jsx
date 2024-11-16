import React from 'react';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            {/* this is main layout */}
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;