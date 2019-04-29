import React, { Component } from 'react';
import './App.css';
import img_elBackground2491217_1920 from './images/FrukostScreen_elFlooring624772_1920_603954.jpg';
import img_elImage from './images/StartScreen_elImage_990851.jpg';
import img_elImage2 from './images/StartScreen_elImage2_227278.jpg';
import img_elImageCopy from './images/StartScreen_elImageCopy_355523.jpg';
import img_elImageCopy2 from './images/StartScreen_elImageCopy2_759695.jpg';

// UI framework component imports
import Button from 'muicss/lib/react/button';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  onClick_elImage2 = (ev) => {
    // Go to screen 'Frukost'
    this.props.appActions.goToScreen('frukost', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton = (ev) => {
    // Go to screen 'Frukost'
    this.props.appActions.goToScreen('frukost');
  
  }
  
  
  onClick_elImageCopy = (ev) => {
    // Go to screen 'Lunch 2'
    this.props.appActions.goToScreen('lunch2', { transitionId: 'fadeIn' });
  
  }
  
  
  onClick_elButton2 = (ev) => {
    // Go to screen 'Lunch 2'
    this.props.appActions.goToScreen('lunch2');
  
  }
  
  
  onClick_elImageCopy2 = (ev) => {
    // Go to screen 'Middag'
    this.props.appActions.goToScreen('middag');
  
  }
  
  
  onClick_elButton3 = (ev) => {
    // Go to screen 'Middag'
    this.props.appActions.goToScreen('middag');
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBackground = {
        width: '100%',
        height: '100%',
     };
    const style_elBackground_outer = {
        backgroundColor: '#f6f6f6',
     };
    const style_elBackground2491217_1920 = {
        backgroundImage: 'url('+img_elBackground2491217_1920+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elImage = {
        backgroundImage: 'url('+img_elImage+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elText = {
        fontSize: 21.5,
        color: 'rgba(59, 53, 46, 0.8500)',
        textAlign: 'center',
     };
    const style_elImage2 = {
        backgroundImage: 'url('+img_elImage2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elImage2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elImageCopy = {
        backgroundImage: 'url('+img_elImageCopy+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elImageCopy_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton2 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elImageCopy2 = {
        backgroundImage: 'url('+img_elImageCopy2+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elImageCopy2_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elButton3 = {
        display: 'block',
        color: 'white',
        textAlign: 'center',
     };
    const style_elButton3_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='appBg containerMinHeight elBackground' style={style_elBackground_outer}>
            <div style={style_elBackground} />
          
          </div>
          
          <div className='containerMinHeight elBackground2491217_1920' style={style_elBackground2491217_1920} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elImage'>
            <div style={style_elImage} />
          
          </div>
          
          <div className='font-josefinSlabBold  elText'>
            <div style={style_elText}>
              <div>{this.props.locStrings.start_text_984757}</div>
            </div>
          
          </div>
          
          <div className='elImage2' style={style_elImage2_outer}>
            <div style={style_elImage2} onClick={this.onClick_elImage2}  />
          
          </div>
          
          <div className='actionFont elButton' style={style_elButton_outer}>
            <Button style={style_elButton}  color="primary" onClick={this.onClick_elButton} >
              {this.props.locStrings.start_button_944775}
            </Button>
          
          </div>
          
          <div className='elImageCopy' style={style_elImageCopy_outer}>
            <div style={style_elImageCopy} onClick={this.onClick_elImageCopy}  />
          
          </div>
          
          <div className='actionFont elButton2' style={style_elButton2_outer}>
            <Button style={style_elButton2}  color="primary" onClick={this.onClick_elButton2} >
              {this.props.locStrings.start_button2_815856}
            </Button>
          
          </div>
          
          <div className='elImageCopy2' style={style_elImageCopy2_outer}>
            <div style={style_elImageCopy2} onClick={this.onClick_elImageCopy2}  />
          
          </div>
          
          <div className='actionFont elButton3' style={style_elButton3_outer}>
            <Button style={style_elButton3}  color="primary" onClick={this.onClick_elButton3} >
              {this.props.locStrings.start_button3_782400}
            </Button>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
