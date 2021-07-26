import React, { Component } from 'react';
import './Header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AmazonLogo from './images/amazon-logo.png';
import SearchIcon from '@material-ui/icons/Search';

export default class Header extends Component {
    render() {
      return (
        <div class="amazon-header">
          <img class="amazon-logo" src={AmazonLogo}/>
          <form class="search-wrapper">
            <input type="text"></input>
            <div class="search-icon-wrapper">
              <SearchIcon class="search-icon"/>
            </div>
          </form>
          <div class="icon-wrapper">
            <ShoppingBasketIcon class="shopping-basket"/>
          </div>
        </div>
      );
    }
}