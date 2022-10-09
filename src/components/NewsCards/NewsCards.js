import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import { Grid, Grow, Typography } from '@material-ui/core'
import useStyles from './Styles'
import { BrowserRouter as Router, Route, Link } 
       from "react-router-dom";


export default function NewsCards({ articles, activeArticle }) {
    const classes = useStyles();
    const infoCards = [
        { color: '#071B2F', title: 'Latest News', text: 'Give me the latest news' },
        { color: '#071B2F', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { color: '#071B2F', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
        { color: '#071B2F', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
    ];



    if (!articles.length) {
        return (
            <>
                <div className="instructions" >
                <Link to={'/'} style={{textDecoration:'none'}}><h1>HERMES</h1></Link>
                    <h2>Say the following</h2>
                    <ul className="list" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <li>Try saying "Go Back" To go back to the previous page</li>
                        <li>
                            Try saying "Open Article number *as per your choice*" to open the desired
                            article
                        </li>
                    </ul>
                </div>
                <Grow in>
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {infoCards.map((infoCard) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                                <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                    <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                                    {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                                    <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grow>
            </>
        )
    }

    return (
        <><div className="instructions" >
             <Link to={'/'} style={{textDecoration:'none'}}><h1>HERMES</h1></Link>
            <h2>Say the following</h2>
            <ul className="list" data-aos="fade-up" data-aos-easing="ease-in-out">
                <li>"Go Back" To go back to the previous page</li>
                <li>
                    Open Article number "any no. of your choice" to open the Desired
                    article
                </li>
            </ul>
        </div>
            <Grow in>
                <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {articles.map((article, i) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                            <NewsCard article={article} activeArticle={activeArticle} i={i} />
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        </>
    )
}
