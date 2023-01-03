import { Space, List, Button, Card, Image, Typography} from 'antd';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Home = () => {
    const [items, setItems] = useState([])
    const [IsLoading, setIsLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        let path = 'api/v1/homes'
        axios.get(path)
            .then(res => {
                console.log(res)
                setItems(res.data)
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err)
            })
    }, [])
    return (
        <div>
            {!IsLoading && (
                <List
                    grid={{
                        gutter: 16,
                        column: 4,
                    }}
                    bordered
                    renderItem={(home, index) => {
                        return <Card
                            className='itemCard'
                            title={home.title}
                            key={index}
                            cover={
                                <Image className='itemCardImage' src={`./images/${home.image_url}`} />
                            }
                            actions={[
                                <Space size={[16]}>
                                    <Button type="primary" shape="round" size='small'>View Details</Button> |
                                    <Button onClick={() => navigate(`payment/${home.id}`)} type="primary" shape="round" size='small'>
                                        Make Payment
                                    </Button>
                                </Space>
                            ]}
                        >
                            <Card.Meta
                                title={
                                    <Typography.Paragraph>
                                        Price: ${home.price}
                                    </Typography.Paragraph>
                                }
                                description={<Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>{home.description}</Typography.Paragraph>}
                            ></Card.Meta>
                        </Card>
                    }} dataSource={items}
                ></List>
            )}
            {IsLoading && <Spinner />}
        </div>
    );
}

export default Home;
