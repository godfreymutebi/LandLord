//testing data fetching with axios
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Apartments = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Apartments

//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