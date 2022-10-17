import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        height: '45vh',
        padding: '10%',
        color: 'white',
        background: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(4px)',
    },
    infoCard: {
        display: 'flex', flexDirection: 'column', textAlign: 'center'
        ,
    },
    container: {
        padding: '0 ', width: '100%', margin: 0,display: 'flex',justifyContent: 'center'
        
    }
});