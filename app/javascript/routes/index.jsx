import React from 'react';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import UserList from '../components/UserList';
import SignOut from '../components/LogOut';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Dashboard" element={<Dashboard />} />
			<Route path="/UserList" element={<UserList />} />
			<Route path="/SignOut" element={<SignOut />} />
			
		</Routes>
	</Router>
);

