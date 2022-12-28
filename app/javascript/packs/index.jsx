// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import Routes from '../routes/index';

const App = (props) => {
    return <>{Routes}</>;
  };
  
document.addEventListener("DOMContentLoaded", () => {
  var element = document.getElementById("root-page");
 element && ReactDOM.render(
    <React.StrictMode>
            <BrowserRouter>
              <App />
            </BrowserRouter>
      </React.StrictMode> , element);  
});
