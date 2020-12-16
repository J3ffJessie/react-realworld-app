/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Axios from 'axios';



export function Tags() {
    const [requestState, setRequestState] = useState('idle')
    const [tags, setTags] = useState([])


    React.useEffect(() => {
        setRequestState('pending')
        Axios.get('http://conduit.productionready.io/api/tags?limit=5')
        .then((response) => {
            console.log('response:', response)
            setRequestState('success')
            setTags(response.data.tags)
            
        })
        .catch((error) => {
            setRequestState('failure')
            setTags(<h1>Your tagslist has failed to load...</h1>)
            console.error(error)
        })
    }, [] )

    return(
        <React.Fragment>
            {requestState === 'pending' && <h2>Loading ...☹️</h2>}
            {requestState === 'failure' && <h2>Sorry</h2>}
            {requestState === 'success' && tags.filter(tag => tag !== null).map(tag => <a>{tag}</a>)}
                return (
                    <div>
                <div className='col-md-3'>
                    <div className='sidebar'>
                        <p>Popular Tags</p>

                        <div className='tag-list'>
                        </div>
                    </div>
                </div>
                </div>
                )
        </React.Fragment>
    )
}
        