import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import './App.css'

const akey = 'a470f8316ec72a42a8ccb407e67697c72e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {

  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: akey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      }
    })
  }, []);

  console.log("h" + newsArticles);



  return (
    <>
      <h1>Alan AI News App</h1>
      <NewsCards articles={newsArticles} />
    </>
  );
}

export default App;
