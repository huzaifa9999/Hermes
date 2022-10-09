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
        borderRadius: 10,
        color: 'white',
        backdropFilter: "blur(30px)",
        boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
    },
    infoCard: {
        display: 'flex', flexDirection: 'column', textAlign: 'center',
    },
    container: {
        padding: '0 5%', width: '100%', margin: 0,
    }
});