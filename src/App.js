import React, { useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import './App.css'
import Home from "./components/home/Home"
import Main from "./components/home/Main"
import wordsToNumbers from 'words-to-numbers';
import useStyles from './style.js';
import Aos from "aos";
import "aos/dist/aos.css";


const akey = 'a470f8316ec72a42a8ccb407e67697c72e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

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
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Main/>} />
      <Route path="/news" element={<NewsCards articles={newsArticles} activeArticle={activeAricle} data-aso="fade[up" />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
