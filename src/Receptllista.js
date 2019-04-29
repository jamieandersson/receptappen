import React, { Component } from 'react';
import './App.css';
import img_elImage from './images/Receptllista_elImage_256874.jpg';


export default class Receptllista extends Component {

  // Properties used by this component:
  // title, publisher, image_url, publisher_url

  onClick_elImage = (ev) => {
    window.location = this.props.publisher_url;
  
  }
  
  
  onClick_elText = (ev) => {
    window.location = this.props.publisher_url;
  
  }
  
  
  render() {
    // eslint-disable-next-line no-unused-vars
    let baseStyle = {};
    // eslint-disable-next-line no-unused-vars
    let layoutFlowStyle = {};
    
    const style_elImage = {
        backgroundImage: 'url('+(this.props.image_url || img_elImage)+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elImage_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elText = {
        fontSize: 25.8,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        color: 'rgba(59, 53, 46, 0.8500)',
        textAlign: 'left',
     };
    const value_text = this.props.title;
    
    const style_elText_outer = {
        cursor: 'pointer',
        pointerEvents: 'auto',
     };
    const style_elTextCopy = {
        color: 'rgba(59, 53, 46, 0.8500)',
        textAlign: 'left',
     };
    const value_textCopy = this.props.publisher;
    
    
    return (
      <div className="Receptllista" style={baseStyle}>
        <div className="layoutFlow">
          <div className='elImage' style={style_elImage_outer}>
            <div style={style_elImage} onClick={this.onClick_elImage}  />
          
          </div>
          
          <div className='elText' style={style_elText_outer}>
            <div style={style_elText} onClick={this.onClick_elText} >
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.receptllista_text_79512}</span>)}</div>
            </div>
          
          </div>
          
          <div className='headlineFont elTextCopy'>
            <div style={style_elTextCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.props.locStrings.receptllista_text_203257}</span>)}</div>
            </div>
          
          </div>
          
        </div>
      </div>
    )
  }
  

}
