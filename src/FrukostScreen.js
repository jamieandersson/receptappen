import React, { Component } from 'react';
import './App.css';
import img_elFlooring624772_1920 from './images/FrukostScreen_elFlooring624772_1920_603954.jpg';
import Receptllista from './Receptllista';
import btn_icon_back_frukost from './images/btn_icon_back_frukost.png';

// UI framework component imports
import Appbar from 'muicss/lib/react/appbar';


export default class FrukostScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

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
    
    const dataSheet_recept = this.props.dataSheets['recept'];
    const style_elCard = {
        width: '100%',
        height: '100%',
     };
    const style_elCard_outer = {
        backgroundColor: 'white',
        boxShadow: '0.0px 2.3px 18px rgba(0, 0, 0, 0.1600)',
     };
    const style_elFlooring624772_1920 = {
        backgroundImage: 'url('+img_elFlooring624772_1920+')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
     };
    const style_elList = {
        height: 'auto',  // This element is in scroll flow
     };
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('recept').items);
    
    
    return (
      <div className="AppScreen FrukostScreen" style={baseStyle}>
        <div className="background">
          <div className='cardBg containerMinHeight elCard' style={style_elCard_outer}>
            <div style={style_elCard} />
          
          </div>
          
          <div className='containerMinHeight elFlooring624772_1920' style={style_elFlooring624772_1920} />
        </div>
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='hasNestedComps elList'>
            <div style={style_elList}>
              {items_list.map((row, index) => {
                let itemClasses = `gridItem cols1_${index % 1} cols2_${index % 2} cols3_${index % 3}`;
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <Receptllista dataSheetId={'recept'} dataSheetRow={row} {...{ 'title': row['title'], 'publisher': row['publisher'], 'image_url': row['image_url'], 'publisher_url': row['publisher_url'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (
                  <div className={itemClasses} key={row.key}>
                    {itemComp}
                  </div>
                )
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </div>
          
          </div>
          
        </div>
        <Appbar className="navBar">
          <div className="title">Frukost</div>  <div className="backBtn" onClick={ (ev)=>{ this.props.appActions.goBack() } }><img src={btn_icon_back_frukost} alt="" style={{width: '50%'}} /></div>
        </Appbar>
        
      </div>
    )
  }
  

}
