import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

let apiUrl = "https://api.nytimes.com/svc/topstories/v2";
let apiKey = "Ob5kcWUnGBzfGur6XGSa6aNGX5ZGVz6n";
let type ="world.json";

function News() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    let api = `${apiUrl}/${type}?api-key=${apiKey}`;
    fetch(api).then(response => response.json()).then(data => {
      setNews(data);
    })
  }, []);

  return (
    news && news.results.splice(0,4).map((article, index) => {
      return (
      <article id = 'news' key={article.url}>
        <img id='image' alt={index} height="100px" src={article.multimedia[0].url} />
        <a href={article.url}>{article.title}</a> 
      </article>
      )
    })
     
  );
}

export default News;