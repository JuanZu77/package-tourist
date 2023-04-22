
import {makeStyles} from '@material-ui/core';

const Layout =({children})=>{

    const classStyles = useStyles();
    return(
        <div className={classStyles.root}>
            {children}
        </div>
    )

}

export default Layout;

const useStyles =  makeStyles((theme)=>({
     root:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        minHeight:'100vh',
        margin: theme.spacing(2) 
     }
}))