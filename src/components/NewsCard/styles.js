import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    image: {
        height: 250,
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderBottom: '10px solid white',
        backgroundColor: '#071B2F',
        // -webkit-backdrop-filter: blur(10px),
	    backdropFilter: "blur(30px)",
        boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
        color:'#B6E4C8'
    },
    activeCard: {
        borderBottom: '10px solid #22289a',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
});