
import React from "react";
import {GridList, GridListTile, GridListTileBar, Paper, makeStyles} from '@material-ui/core';
import tileData from "../../tileData";

export default function GalleryComponent (){

  const classStyles = useStyles();
    return(
    <Paper variant="" square elevation={0} className={classStyles.galleryRoot}>
      
    <div className={classStyles.mosaic}>

        <GridList cellHeight={220} className={classStyles.gridList}>
        
           {tileData.map((tile)=>{
               return <GridListTile key={tile.title}>
                <img src={tile.img} alt={tile.title}/>

                  <GridListTileBar title={tile.title}/>

               </GridListTile>
           })}
         </GridList>

   </div>
    </Paper>
    )
}

const useStyles =  makeStyles((theme)=>({
  galleryRoot:{
    height:'auto',
  },

  mosaic:{
       display: 'flex',
       flexWrap: 'wrap',
       justifyContent: 'space-around'
  },

  gridList:{

    width:1000,
    height:500,

    '&::-webkit-scrollbar': {
      display: 'none'
    },
      '& img':{
         filter: 'grayscale(25%)'
      },
    '& img:hover':{
      scale: 1.1,
      filter: 'none',
    }
  
  }

}));