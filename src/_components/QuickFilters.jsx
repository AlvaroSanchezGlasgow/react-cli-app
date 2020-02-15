import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



class QuickFilters extends React.Component {
    componentDidMount() {
       
    }
    render() {
      
      
        return (
          <BottomNavigation>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} title="Recents" href="#"/>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} title="Favourites" href="#" />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} title="Nearby" href="#"/>
          </BottomNavigation>
        );
    }
}


export default QuickFilters;