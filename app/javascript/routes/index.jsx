import React from 'react';
import Base from '../components/Base';
import LogIn from '../pages/Login';
import { Route, Routes } from "react-router-dom";
import Register from '../pages/Register';
import Password from '../pages/Forgot_PWD';
import PageNotFound from '../pages/PageNotFound';
import Apartments from '../pages/Apartments';
import Rentals from '../pages/Rentals';
import Booking from '../pages/Booking'
import Payment from '../pages/Payment';

export default (
    <Routes>
        {/* public Routes. */}
        <Route path="/" element={<Base />} />
        <Route path="/users/sign_in/" element={<LogIn />} />
        <Route path="/users/sign_up/" element={<Register />} />
        <Route path="/users/password/new" element={<Password />} />
        
        {/* privite Routes */}
        <Route path="/payment/:home_id" element={<Payment />} />
        <Route path="/Booking" element={<Booking />}/>
        <Route path="/Apartments" element={<Apartments />} />
        <Route path="/Rentals" element={<Rentals />} />
        <Route path="/payment/:home_id" element={<Payment />} />

        {/* Not Found Routes */}
        <Route path='/*' element={<PageNotFound />} />
    </Routes>
);

