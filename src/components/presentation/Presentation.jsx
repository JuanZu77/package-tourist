
import React from "react";
import {Paper, Typography, makeStyles} from '@material-ui/core';

import ListGallery from "./ListGallery";

export default function Presentation (){

  const classStyles = useStyles();
    return(
      <Paper variant="outlined" elevation={0} className={classStyles.presentation}>

        <Typography variant="h6">
           <b>Our package includes</b>
        </Typography>

        <ListGallery>

        </ListGallery>

      </Paper>
    )
}

const useStyles =  makeStyles((theme)=>({
  presentation:{
    width: 'inherit',
    height:'auto',
    padding: theme.spacing(2)
  }
}))