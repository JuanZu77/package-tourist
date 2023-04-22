
import React from "react";
import {Paper, Typography, makeStyles} from '@material-ui/core';
import smart from '../../images/smartCity.png';
import logo from '../../images/logo.png';
import StartIcon from '@material-ui/icons/Stars';

  export default function Banner (){
    
    const classStyles = useStyles();
    
      return(
  <>
    <Paper variant='outlined' square elevation={0} className=  {classStyles.banner}>

      <div className={classStyles.titleContainer}>
    
        <Typography variant='h4' component='h1' className={classStyles.title}>
          Reset your Events in <span style={{color:'#ea5933'}}>Barcelona</span> 
        </Typography>

        <img src={logo} alt='logo' className={classStyles.logo}/>
          
      </div>

      <div className={classStyles.subtitleContainer}>
          <Typography className={classStyles.subtitle} variant="h6">
            Organize your meeting in a...<br/>
            100% certifified eco-resort 
            <StartIcon className={classStyles.icon} /> best-in-class-speed-connection
            <StartIcon className={classStyles.icon}/>
            surrounded by nature
            <StartIcon className={classStyles.icon}/> 20 mins from Barcelona
            </Typography>   
      </div>

      </Paper>
  </>
         
      )
  }


const useStyles =  makeStyles((theme)=>({
  banner:{
     width: 'inherit', 
     height: '55vh', 
      backgroundImage: `url(${smart})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      color: '#fff', 
      fontWeight: 'bold',
      position: 'relative', 

  },

  titleContainer:{
      background: '#000',
      opacity: 0.8,
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left:0,
      right:0,


  },

  logo:{
      width:'10rem',
      height:'auto',
      padding: theme.spacing(3),

  },

  title:{
    padding: theme.spacing(3),
    fontSize:'2rem',
  },

  subtitleContainer:{
   position:'absolute',
   bottom: 0, 
   left:0, 
   right:0,
   background:'#000',
   opacity: 0.9,

  },

  subtitle:{
    color:'#ea5933',
    fontWeight:'bold',
    padding: theme.spacing(3),
    height: 'auto', 
    textAlign:'center',

  },

  icon:{
      fontSize: 'small',
      verticalAlign:'middle',
      margin: theme.spacing(0,1),
  },

  [theme.breakpoints.down("sm")]:{
    title:{
      fontSize:'1.5rem',
    },
    logo:{
     width:'7rem',
    },
    subtitle:{
      fontSize:'1rem',
    }
  },


  [theme.breakpoints.down("xs")]:{
    title:{
      fontSize:'1.45rem',
    },
    logo:{
     width:'5rem',
    },
    subtitle:{
      display:'none',
    }
  },


}))