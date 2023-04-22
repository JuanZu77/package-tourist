
import React from "react";
import {Grid, makeStyles} from '@material-ui/core';
import ListComponent from "./ListComponent";
import GalleryComponent from "./GalleryComponent";

export default function ListGallery (){

  const classStyles = useStyles();
    return(
    <div className={classStyles.grid}>

      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>

          <ListComponent/>

        </Grid>

        <Grid item xs={12} md={6}>

          <GalleryComponent/>

        </Grid>

      </Grid>
        
    </div>
     
    )
}

const useStyles =  makeStyles((theme)=>({
  grid:{
     
  }
}))