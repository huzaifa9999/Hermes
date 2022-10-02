import React,{useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
const akey='a470f8316ec72a42a8ccb407e67697c72e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {

  useEffect(() => {
    alanBtn({
      key:akey,
      onCommand:({command,articles}) => {
        if(command==='newHeadlines'){
        console.log("yooooo");
        console.log(articles);
        }
      }
    })
  },[]);

 
  
 
  
  return (
   <>
<h1>pls work hue hue hue</h1>
   </>
  );
}

export default App;
