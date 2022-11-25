import React from 'react'

const Apartments = () => {
    return <h1>Hello, Apartments</h1>
}

export default Apartments
// import React from 'react';
// import {DollarCircleOutlined }from '@ant-design/icons';
// import { Card } from 'antd';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// const { Meta } = Card;
// const Home = () => {
//   const navigate = useNavigate();
//   const [item, setItem] = useState([]);
//   //data fetching
//   useEffect(() => {
//     const url = "/api/v1/homes/index";
//     fetch(url)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Network response was not ok.");
//       })
//       .then(response => setItem({ items: response }))
//       .catch(() => navigate("/"));
//   }, [])

//   return (
//     <div>
//       <ul>
//         {item.map((home) => (
//           <li key={home.id}>
//             <h3>
//               {home.title} 
//             </h3>
//             <h3>
//               {home.image_url} 
//             </h3>
//             <p>{home.description}</p>
//             <h3>
//               {home.price} 
//             </h3>
//             <h3>
//               {home.location} 
//             </h3>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Home;

// {/* <div className="site-card-wrapper" style={{ marginTop: 3 }}>
//       {homes.map((home) => (
//         <Card key={home.id}
//           style={{
//             marginTop: 5,
//           }}
//           actions={[
//             <DollarCircleOutlined label='Price' key="{home.price}" />,
//             <DollarCircleOutlined label='Buy' key="PAYEMENTS" />,

//           ]}
//         >
//           <Meta
//             avatar={<img alt="example" src="{home.image_url}" />}
//             title=" {home.title} "
//             description="{home.description}"
//           />
//            <p>{"home.location"}</p>
//         </Card>
//       ))}
//     </div> */}

