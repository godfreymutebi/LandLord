import React from 'react';
import Base from '../components/Base';
import LogIn from '../pages/Login';
import { Route, Routes} from "react-router-dom";
import Register from '../pages/Register';
import Password from '../pages/Forgot_PWD';

export default (
	<Routes>
        <Route path="/users/sign_in/" element={<LogIn/>} />
        <Route path="/users/sign_up/" element={<Register/>} />
        <Route path="/users/password/new" element={<Password/>} />

		<Route path="*" element={<Base /> } />
	</Routes>
);

