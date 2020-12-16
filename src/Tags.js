import React, { useState } from 'react';
import Axios from 'axios';



export function Tags() {

    const [requestState, setRequestState] = useState('idle')
    const [tags, setTagsList] = useState([])
    const [articles, setArticles] = useState([])


    React.useEffect(() => {
        setRequestState('pending')
        Axios.get('https://conduit.productionready.io/articles/tags')
        .then((response) => {
            setRequestState('success')
            setTagsList(response.data.articles.tags)
        })
        .catch((error) => {
            setRequestState('failure')
            setTagsList(<h1>Your tagslist has failed to load...</h1>)
            console.error(error)
        })
    }, [] )


    {requestState === 'pending' && <h2>Loading....😫</h2>}


        {requestState ==='failure' && (<h2>Sorry, the tagslist appears to be broken... 😭</h2>)}

        {requestState === 'success' && (articles.map((article) => {

            return (
                <div>
                <div className='col-md-3'>
                    <div className='sidebar'>
                        <p>Popular Tags</p>

                        <div className='tag-list'>
                            <a href="" className="tag-pill tag-default">{article.tags}</a>
            <a href="" className="tag-pill tag-default">{article.tags}</a>
            <a href="" className="tag-pill tag-default">{article.tags}</a>
            <a href="" className="tag-pill tag-default">{article.tags}</a>
            <a href="" className="tag-pill tag-default">{article.tags}</a>
            <a href="" className="tag-pill tag-default">{article.tags}</a>
            <a href="" className="tag-pill tag-default">{article.tags}</a>
            <a href="" className="tag-pill tag-default">{article.tags}</a>
                        </div>
                    </div>
                </div>
                </div>

            )
        }))}}