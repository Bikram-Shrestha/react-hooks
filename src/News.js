import React from 'react';
import {useFetch} from './hooks';

const NEWS_ADDRESS ='http://news-proxy-server.appspot.com/topstories';

function News(){
  const news = useFetch(NEWS_ADDRESS,[])
  return(
    <div className='Stories'>
      <h3>Stories</h3>
      {
        news.map(newsArticle=>{
          const {id,title, by,url,time} = newsArticle;

          return(
            <div key = {id}>
              <a href ={url}>{title}</a>
              <div>by - {by} -{new Date(time*1000).toLocaleString()}</div>
            </div>
          )
        })
      }
    </div>
  ) 
}

export default News;