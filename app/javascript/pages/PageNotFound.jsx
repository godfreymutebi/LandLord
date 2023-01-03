import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const PageNotFound = () => {
    const params = useParams()
    const navigate = useNavigate();

    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle={`Sorry, the page "${params.pageName}" you visted does not existed`}
                extra={<Button type="primary" onClick={() => navigate("/")}>Back Home</Button>}
            />
        </div>
    )
}

export default PageNotFound;

