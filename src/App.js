import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Chart from './components/Chart/Chart';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([])
  // useEffect( () => {
  //   const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-16&sortBy=publishedAt&apiKey=59d7f339afa84dc9ab5b5b2b027994d7';
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => console.log(data.articles))
  // },[])
  useEffect( () => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-16&sortBy=publishedAt&apiKey=59d7f339afa84dc9ab5b5b2b027994d7';
    axios(url)
    .then(data => setArticles(data.data.articles))
  }, [])
  return (
    <div>
      {
        articles.map( article => <News article={article}></News>)
      }
      <Chart></Chart>
    </div>
  );
}

export default App;
