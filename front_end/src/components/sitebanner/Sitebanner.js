import React, { Component } from 'react';
import DonateForm from '../form/DonateForm';
import iphoneX from '../../images/sixtus.png';
import charity from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import './SiteBanner.css';
import '../../App.css';

export default class SiteBanner extends Component {
  state={ 
    modalOpen: false,
    balance: '',
    donatorsCount: '',
    charityCount: '',
   }

   componentDidMount = async event => {
    const summary = await charity.methods.getSummary().call();
      this.setState({
        balance: summary[0],
        donatorsCount: summary[1],
        charityCount: summary[2]
      })
  }

  clickOpenModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  render() {
     return (
<div>
  <div className='banner-background'>
    <DonateForm clickOpen={this.state.modalOpen} onClose={this.clickOpenModal} />
    <div className='main-banner'>
      <div className='squeeze'>
        <div className='banner-flex'>
          <div className='column__one-third'>
            <div className='banner-header'>Donate For A Common Cause</div>
            <div className='banner-caption__description-amount'>Our Mission is to help grow our community{ this.state.charityCount } people helped raise
              <span> { web3.utils.fromWei(this.state.balance, 'ether') } ETH</span>!</div>
            <button className='donate-button__banner' onClick={ ()=> this.clickOpenModal() } >Contribute
            </button>

            <button className='info-button__banner'>More Info</button>
          </div>
          <div className='column__two-third'>
            <img className='iphonex-asset' src={iphoneX} alt="iPhoneX" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}