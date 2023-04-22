
import React from "react";
import {List, ListItem, ListItemIcon, ListItemText, ListSubheader, makeStyles} from '@material-ui/core';
import data from "../../listData";

export default function ListComponent (){

  const classStyles = useStyles();
    return(
    <List component='nav' aria-labelledby= "nested-list-subheader" 
    subheader={ 
       <ListSubheader component='div' id='nested-list-subheader'>
        Cost based on a group of 30px, accommodated in twin rooms 
       </ListSubheader>
       } /*className={classStyles.listRoot}*/
    >
    {
        data.map(item =>(
            <ListItem key={item.text}>
                <ListItemIcon className={classStyles.icon}>
                    {item.icon}
                </ListItemIcon>

                <ListItemText primary={item.text}>
                </ListItemText>
                
            </ListItem>
        ))
    }
     
    </List>
    )
}

const useStyles =  makeStyles((theme)=>({
  icon:{
    margin: '0.1rem',
    color:'#ea5933',
  },


}))