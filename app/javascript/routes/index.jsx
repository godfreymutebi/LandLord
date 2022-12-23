import React from 'react';
import Base from '../components/Base';
import LogIn from '../pages/Login';
import { Route, Routes } from "react-router-dom";

export default (
	<Routes>
        <Route path="/users/sign_in/" element={<LogIn/>} />
		<Route path="*" element={<Base /> } />
	</Routes>
);

