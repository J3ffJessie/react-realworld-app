// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from 'react';
// import Axios from 'axios';



// export function Tags() {
//     const [requestState, setRequestState] = useState('idle')
//     const [tags, setTags] = useState([])


//     React.useEffect(() => {
//         setRequestState('pending')
//         Axios.get('http://conduit.productionready.io/api/tags')
//         .then((response) => {
//             console.log('response:', response)
//             setRequestState('success')
//             setTags(response.data.tags)
            
//         })
//         .catch((error) => {
//             setRequestState('failure')
//             setTags(<h1>Your tagslist has failed to load...</h1>)
//             console.error(error)
//         })
//     }, [] )

//     return(
//         <React.Fragment>
//             {requestState === 'pending' && <h2>Loading ...☹️</h2>}
//             {requestState === 'failure' && <h2>Sorry</h2>}
//             {requestState === 'success' && tags.filter(tag => tag !== null).map(tag => <a href={tag} className= >{tag}</a>)}
//         </React.Fragment>
//     )
// }
        

import React from "react";
// import axios from "axios";
// import baseUrl from "./baseUrl";
import { client as apiClient } from "./api-client";

export function TagList() {
  const [tagRequestState, setTagRequestState] = React.useState("idle");
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    setTagRequestState("pending");

    apiClient
      .get("/tags")
      .then((response) => {
        setTagRequestState("success");
        setTags(response.data.tags);
      })
      .catch((error) => {
        setTagRequestState("failure");
        console.log(error);
      });
  }, []);

  return (
    <>
      <p>Popular Tags</p>
      <div className="tag-list">
        {tags.filter(tags => tags !== '&zwnj').map((tag) => {
            return (
              <a href="" className="tag-pill tag-default">
                {tag}
              </a>
            );
        })}
      </div>
    </>
  );
}