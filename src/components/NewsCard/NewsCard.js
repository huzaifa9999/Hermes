import React, { useState,useEffect,createRef }from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import useStyles from './styles'
import classNames from 'classnames'
const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i,activeArticle }) => {

    const classes = useStyles();
    const [eleref,seteleref]= useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
    useEffect(() => {
      seteleref((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()) );
    }, [])
    
useEffect(() =>{
if(i===activeArticle && eleref[activeArticle]){
    scrollToRef(eleref[activeArticle]);
}
},[i,activeArticle,eleref])
    return (
        <Card  ref={eleref[i]} className={classNames(classes.card, activeArticle===i? classes.activeCard : null)}> 
            <CardActionArea href={url} target='_blank'>
                <CardMedia className={classes.image} image={urlToImage || 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg'} />
                <div className={classes.details}>
                    <Typography variant="body2"  component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2"  component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant='h5'>{title}</Typography>
                <CardContent >
                    <Typography variant="body2"  component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='#B6E4C8' href={url} target='_blank'>Learn More</Button>
                <Typography variant="h5" >{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard