
import React from "react";
import {Container, Link, Typography, makeStyles,} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite' ;

const Copyrigth =()=>{
  return(
    <Typography variant="body1" color="textSecondary">
      Copyrigth ©️ 
       <Link color="inherit" href="https://github.com/JuanZu77" target="_blanck" rel="noreferrer"> github.com/JuanZu77 {new Date().getFullYear()}
       </Link>
    </Typography>
  )
}

export default function StickyFooter (){

  const classStyles = useStyles();
    return(
      <footer className={classStyles.footer}>

        <Container maxWidth='sm'>

          <Typography variant='body1'>
            Curated with love <FavoriteIcon style={{color: 'red'}} />
            by the <span> 
              <a href="https://github.com/JuanZu77" target="_blank" rel="noreferrer"> Travel-Agency</a>
            </span>
          </Typography>
            
            <Copyrigth/>
        </Container>

      </footer>
    )
}


const useStyles =  makeStyles((theme)=>({
  footer:{
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    textAlign: 'center',
     
  }
}))