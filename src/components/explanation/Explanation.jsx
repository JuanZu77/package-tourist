import React from "react";
import {Paper, Typography, makeStyles, Divider, Button} from '@material-ui/core';
import {Email} from '@material-ui/icons';

//Componente Emoji
const Emoji =(props)=>{
    return(
      <span role="img"
      aria-label={props.label ? props.label : ''}
      aria-hidden={props.label ? 'false' : 'true'}>
     {props.symbol}
     </span>
    )
}

export default function Explanation (){

  const classStyles = useStyles();
      return(
        <Paper variant="outlined" elevation={0}square className={classStyles.explanation}>
          <Typography variant="subtitle2" paragraph gutterBottom>
           <b>MICE</b> groups are finally back,<Emoji symbol='✌️' label='victory'/> and we feel like we are in the pink! All this past months, we have been talking to you guys, and we have listened whats the new necessities are now for the <b>MICE</b> Narket, now that... this thingy is over <Emoji symbol='😁' label='victory'/> ethem...
          </Typography>

          <Divider/>{/*linea horizontal */}

          <Typography variant="subtitle2" paragraph gutterBottom>

           It took time, but our operations team have managed to curate a program that has it all, This offer is bassed on a 5-star 100% certified eco-resort 20 mins north of <b>Barcelona</b>, and sorrounted by nature. <Emoji symbol='🌲' label='victory'/>
           </Typography>

           <Typography variant="subtitle2" paragraph gutterBottom style={{margin:'1rem 1.5rem'}}>
           <Emoji symbol='👉' label='victory'/> For <b>day 1</b>, we have prepared a 1/2 meeting, and pic-nic lunch among vineyards, with sea-viwews and a gret wine activity.  
           </Typography>

           <Typography variant="subtitle2" paragraph gutterBottom style={{margin:'1rem 1.5rem'}}>
           <Emoji symbol='👉' label='victory'/> For <b>day 2</b>, we actually spend the day in Barcelona. We first enjoy a specialised tour at the @22 district, well known as a major hub in the South of Europe for digital entrepreneurs, and tech start ups.
           </Typography>

           <Typography variant="subtitle2" paragraph gutterBottom>
            Our guide will help us notice all the high-tech infraestructure, the IOT (internet of Things) present in every life urban objects, and the policies that have transformed <b>Barcelona</b> to a capital for Mobile 📱. Startups and SmartCities.
          
            Last, but no least -we are offering a first-in-class experience at Vakiria - an extraordinary atelier, where our tailor-made- workshop, will help the group enhance their digital image. <Emoji symbol='🤗' label='victory'/> this workshop can work for the individual participants, as well as at a company level 
          </Typography>

          <div className={classStyles.action}>
            <Button variant="contained" startIcon={<Email/>} style={{margin:'2rem 0', backgroundColor: '#ea5933'}}>
              <a href='mailto:juan@btn-travel.com' className={classStyles.mailto}>
              <span className={[classStyles.buttonText]}>Send me an email</span> 
              <span className={[classStyles.extendText]}>to learn more...</span>
              </a>
              </Button>
              
          </div>

          <Typography variant="h6" style={{textAlign:'center'}}>
            Or get in touch al juan@btn-travel.com
          </Typography>
        
        </Paper>
      )
}

const useStyles =  makeStyles((theme)=>({
   explanation:{
        width:'inherit', 
        height: 'auto',
        padding: theme.spacing(2),
   },   

   action:{
       display: 'flex',
       flexDirection: 'column',
       justifyContent:'center',
       alignItems: 'center',
       '& button:hover':{
        backgroundColor:'#ccc !important',
        scale:1.1,
       }
   },

   buttonText:{
    position:'relative',
    top: '0.08rem'
    
   },
   extendText:{
    position:'relative',
    top: '0.08rem'
   },

   mailto:{
      color:'white',
      fontWeight:'bold',
      fontSize:'1rem',
      textDecoration:'none',
      fontStyle:'italic',
   },
   
  [theme.breakpoints.down('md')]:{
        extendText:{
          display:'none',
          
        }
      },

}))
