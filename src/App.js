import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import './App.css'
import useStyles from './style.js';

const akey = 'a470f8316ec72a42a8ccb407e67697c72e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {

  const classes = useStyles();
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
      <div className='classes.logoContainer'>
        <img src='https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg' className={classes.alanLogo}/>
      </div>
      <NewsCards articles={newsArticles} />
    </>
  );
}

export default App;
