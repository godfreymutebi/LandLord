import React from 'react';
import House from '../components/House'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default (
	<Router>
		<Routes>
			<Route path="/" element={<House />} />
			
		</Routes>
	</Router>
);