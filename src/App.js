import Button from '@mui/material/Button'
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([])
  useEffect( () => {
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-16&sortBy=publishedAt&apiKey=59d7f339afa84dc9ab5b5b2b027994d7';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  },[])
  return (
    <div>
      {
        articles.map( article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
