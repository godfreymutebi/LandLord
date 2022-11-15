import React from 'react';
import App from '../components/App';
import { Route, Routes } from "react-router-dom";

export default (
	<Routes>
		<Route path="/" element={<App />} />
	</Routes>
);

