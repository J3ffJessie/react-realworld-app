import axios from 'axios';
import React, { useState } from 'react';
import { TagList } from './Tags';

export function HomePage() {

  const [requestState, setRequestState] = useState('idle')

  const [articles, setArticles] = useState([])

  React.useEffect(() => {

    setRequestState('pending')
    //this is essential junior level skill handling an api request using asynchronous functionality to handle data
    axios.get('https://conduit.productionready.io/api/articles?limit=10')
    .then((response) => {
      setRequestState('success')
      setArticles(response.data.articles)
    })
    .catch((error) => {
      setRequestState('failure')
      console.error(error)
    })
  }, [])


    return(
        <div>
            <div className="home-page">
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div className="container page">
    <div className="row">
      <div className="col-md-9">
        <div className="feed-toggle">
          <ul className="nav nav-pills outline-active">
            <li className="nav-item">
              <a className="nav-link disabled" href="">Your Feed</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">Global Feed</a>
            </li>

              
          </ul>
        </div>


        {/* Checking status of request and responding accordingly with what is displayed to the user */}

        {requestState === 'pending' && <h2>Loading....😫</h2>}


        {requestState ==='failure' && (<h2>Sorry, your articles are stuck 😭</h2>)}


        {requestState === 'success' && (articles.map((article) => {

          return(
            <div className="article-preview">
          <div className="article-meta">
            <a href="profile.html"
              ><img src={article.author.image} />
            </a>
            <div className="info">
              <a href="" className="author">{article.author.username}</a>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart"></i> {article.favoritesCount}
            </button>
          </div>
          <a href="" className="preview-link">
            <h1>
              {article.title}
            </h1>
            <p>{article.description}</p>
            <span>Read more...</span>
          </a>
        </div>
        
          )
        }))}
            <TagList/>

        </div>
    </div>
  </div>
</div>
</div>

    )
}