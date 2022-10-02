// Use this sample to create your own voice commands
// intent('what does this app do?',reply('this is a news app'));

// intent('start please',(p)=>{
//     p.play({ command:'testCommand'})
// })

const API_KEY = 'a788a01ae8694006a7a72eea351b02c9';
let savedArticles = [];

// News by Source
intent('Give me the news from $(source* (.+))', (p) => {
    let NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
    
    if(p.source.value) {
         p.source.value=p.source.value.toLowerCase().split(" ").join("-");
    NEWS_API_URL = `${NEWS_API_URL}?sources=${p.source.value}&apiKey=${API_KEY}`
    }
    
  api.request(NEWS_API_URL, {headers: {"user-agent": 'user agent' }}, (error, response, body) => {
    const { totalResults, articles } = JSON.parse(body);
    
    if(totalResults == 0) {
        p.play('Sorry, please try searching for news from a different source');
        return;
    }
    
    savedArticles = articles;
    
    p.play({ command: 'newHeadlines', articles });
    p.play(`Here are (latest|recent) ${p.source.value} news.`);

    p.play('Would you like me to read the headlines?');

});
})
