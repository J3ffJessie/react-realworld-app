import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom';



export default function Article() {


  const [requestState, setRequestState] = useState('idle')

  const [article, setArticle] = useState([])

  React.useEffect(() => {

    setRequestState('pending')
    //this is essential junior level skill handling an api request using asynchronous functionality to handle data
    axios.get('https://conduit.productionready.io/api/articles/)
    .then((response) => {
      setRequestState('success')
      setArticle(response.data.articles.slug)
    })
    .catch((error) => {
      setRequestState('failure')
      console.error(error)
    })
  }, [])




    return(
        <Router>
            <div>
                <h2>Article Links</h2>

                <ul>
                    <li>
                        <Link to="/article">Article 1</Link>
                    </li>
                    <li>
                        <Link to="/article">Article 2</Link>
                    </li>
                    <li>
                        <Link to="/article">Article 3</Link>
                    </li>
                    <li>
                        <Link to="/article">Article 4</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/:id" children={<Child />} />
                </Switch>
            </div>
        </Router>
    );
    }

    function Child() {
        let {slug} = useParams();

        return (
            <div>
                <h3>ID: {slug} </h3>
            </div>
        );
    }
