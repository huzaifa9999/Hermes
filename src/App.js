import React, { useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import './App.css'
import wordsToNumbers from 'words-to-numbers';
import useStyles from './style.js';

const akey = 'a470f8316ec72a42a8ccb407e67697c72e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  const classes = useStyles();
  const [newsArticles, setNewsArticles] = useState([]);
const[activeAricle,setActiveArticle] = useState(-1);
  useEffect(() => {
    alanBtn({
      key: akey,
      onCommand: ({ command, articles,number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'highlight'){
          setActiveArticle((prevActiveArticle) =>prevActiveArticle+1)
        }
        else if(command === 'open'){
          const parsednum= number.length>2 ? wordsToNumbers((number),{fuzzy: true}) :number;
          const article= articles[parsednum-1] ;
          if(parsednum>articles.length){
            alanBtn().playText('please enter correct index');
          } else if(article){
            window.open(article.url,'_blank');
            alanBtn().playText(
              "please wait opening");
          }
          else {
            alanBtn().playText('Please try that again...');
          }
          
        }
      } 
    })
  }, []);

  console.log("h" + newsArticles);



  return (
    <>
      <div className='classes.logoContainer'>
        <img src='https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg' alt="" className={classes.alanLogo}/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeAricle} />
    </>
  );
}

export default App;
