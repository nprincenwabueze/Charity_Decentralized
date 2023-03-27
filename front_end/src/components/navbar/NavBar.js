import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
<div className='nav-background'>
<div className='main-nav'>
  <div className='squeeze'>
  <div>
    <div className='nav-flex'>
      <ul>
        <li className='nav-title'> CHARITY DECENTRALIZED </li>
      </ul>
      <div className='nav-align-right'>
        <div className='nav-flex-right'>
          <a href="https://www.facebook.com/profile.php?id=100087744953069"><div className='ion-social-facebook'></div></a>
          <a href="https://www.twitter.com/in/prinvivacious/"><div className='ion-social-twitter'></div></a>
          <a href="https://www.instagram.com/prinvivacious/"><div className='ion-social-instagram-outline'></div></a>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
</div>
    )
  }
}