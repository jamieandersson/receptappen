import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './App.css';
import FrukostScreen from './FrukostScreen.js';
import Lunch2Screen from './Lunch2Screen.js';
import MiddagScreen from './MiddagScreen.js';
import StartScreen from './StartScreen.js';
import DataSheet_localizationSheet from './DataSheet_localizationSheet.js';
import DataSheet_recept from './DataSheet_recept.js';
import DataSheet_lunch from './DataSheet_lunch.js';
import DataSheet_middag2 from './DataSheet_middag2.js';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.dataSheets = {};
    this.dataSheets['localizationSheet'] = new DataSheet_localizationSheet('localizationSheet', this.dataSheetDidUpdate);
    this.dataSheets['recept'] = new DataSheet_recept('recept', this.dataSheetDidUpdate);
    this.dataSheets['lunch'] = new DataSheet_lunch('lunch', this.dataSheetDidUpdate);
    this.dataSheets['middag2'] = new DataSheet_middag2('middag2', this.dataSheetDidUpdate);

    this.dataSlots = {};
    this.dataSlots['ds_activeLang'] = "en";
    this.dataSlots['ds_kategori'] = "breakfast";
    this.dataSlots['ds_lunch'] = "lunch";
    this.dataSlots['ds_middag'] = "dinner";

    this.updateLocalizationFromDataSheet(this.dataSheets['localizationSheet']);


    this.serviceOptions_recept = {
      dataSlots: this.dataSlots,
      servicePath: "search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_kategori')",
      query: "",
    };
    setInterval(() => {  // Reload data regularly
      this.serviceOptions_recept.servicePath = this.dataSheets['recept'].expandSlotTemplateString("search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_kategori')", this.dataSlots);
      this.loadData_recept(this.dataSheets['recept'], this.serviceOptions_recept, false);
    }, 10000);
    
    this.serviceOptions_lunch = {
      dataSlots: this.dataSlots,
      servicePath: "search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_lunch’)",
      query: "",
    };
    setInterval(() => {  // Reload data regularly
      this.serviceOptions_lunch.servicePath = this.dataSheets['lunch'].expandSlotTemplateString("search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_lunch’)", this.dataSlots);
      this.loadData_recept(this.dataSheets['lunch'], this.serviceOptions_lunch, false);
    }, 10000);
    
    this.serviceOptions_middag2 = {
      dataSlots: this.dataSlots,
      servicePath: "search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_dinner’)",
      query: "",
    };
    setInterval(() => {  // Reload data regularly
      this.serviceOptions_middag2.servicePath = this.dataSheets['middag2'].expandSlotTemplateString("search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_dinner’)", this.dataSlots);
      this.loadData_recept(this.dataSheets['middag2'], this.serviceOptions_middag2, false);
    }, 10000);
    

    this.state = {
      currentScreen: 'start',
      currentScreenProps: {},
      screenTransitionForward: true,
    }
    this.screenHistory = [ {...this.state} ];

  }

  windowDidResize = () => {
    let w = window.innerWidth;
    let formatId;
    if (w < 576) formatId = 'narrow-phone';
    else if (w < 768) formatId = 'wide-phone';
    else if (w < 1024) formatId = 'narrow-tablet';
    else formatId = 'wide-tablet';
    if (formatId !== this.state.screenFormatId) {
      this.setState({screenFormatId: formatId});
    }
  }

  componentDidMount() {
    this.windowDidResize();
    window.addEventListener('resize', this.windowDidResize);

    this.serviceOptions_recept.servicePath = this.dataSheets['recept'].expandSlotTemplateString("search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_kategori')", this.dataSlots);
    this.loadData_recept(this.dataSheets['recept'], this.serviceOptions_recept, true);
    
    this.serviceOptions_lunch.servicePath = this.dataSheets['lunch'].expandSlotTemplateString("search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_lunch’)", this.dataSlots);
    this.loadData_recept(this.dataSheets['lunch'], this.serviceOptions_lunch, true);
    
    this.serviceOptions_middag2.servicePath = this.dataSheets['middag2'].expandSlotTemplateString("search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_dinner’)", this.dataSlots);
    this.loadData_recept(this.dataSheets['middag2'], this.serviceOptions_middag2, true);
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDidResize);
  }

  isLoading() {
    return this.state.loading;
  }

  goToScreen = (screenId, props) => {
    // This method is the default implementation and could be customized by a navigation plugin.

    let screenIdx = -1;  // Check if the screen is already in the history stack, and pop back if so
    for (let i = 0; i < this.screenHistory.length; i++) {
      if (this.screenHistory[i].currentScreen === screenId) {
        screenIdx = i;
        break;
      }
    }
    if (screenIdx > -1) {
      this.screenHistory.splice(screenIdx + 1, this.screenHistory.length - screenIdx - 1);
      let prevScreenState = this.screenHistory[screenIdx];
      this.setState({...prevScreenState, screenTransitionForward: false});
    }
    else {
      props = props || {};
      let screenState = {currentScreen: screenId, currentScreenProps: props};
      this.screenHistory.push(screenState);
      this.setState({...screenState, screenTransitionForward: true});
    }
    window.scrollTo(0, 0);
  }

  goBack = () => {
    // This method is the default implementation and could be customized by a navigation plugin.
    if (this.screenHistory.length < 2)
      return;

    this.screenHistory.splice(this.screenHistory.length - 1, 1);
    let prevScreenState = this.screenHistory[this.screenHistory.length - 1];
    this.setState({...prevScreenState, screenTransitionForward: false});
    window.scrollTo(0, 0);
  }

  getDataSheet = (sheetId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    return this.dataSheets[sheetId];
  }

  addToDataSheet = (sheetId, newRow, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && newRow) {
      sheet.addItem(newRow, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateInDataSheet = (sheetId, row, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.replaceItemByKey(row.key, row, this['serviceOptions_'+sheetId] || {});

      if (this.state.currentScreenProps.dataSheetRow) {
        let screenProps = {...this.state.currentScreenProps};
        screenProps.dataSheetRow = row;

        // Also update any props that were carried into a detail view
        for (let prop in screenProps) {
          if (row[prop] !== undefined) {
            screenProps[prop] = row[prop];
          }
        }
        this.setState({currentScreenProps: screenProps});
      } else {
        this.setState({});
      }
    }
  }

  removeFromDataSheet = (sheetId, row) => {
    let sheet = this.dataSheets[sheetId];
    if (sheet && row) {
      sheet.removeItem(row, this['serviceOptions_'+sheetId] || {});
    }
    this.setState({});
  }

  updateDataSlot = (slotId, value, actionId) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.dataSlots[slotId] = value;
    if (slotId === 'ds_activeLang') {
      this.locStrings.setLanguage(value);
    }

    {
      let usedSlots = [];
      let servicePath = this.dataSheets['recept'].expandSlotTemplateString("search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_kategori')", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_recept.servicePath = servicePath;
        this.loadData_recept(this.dataSheets['recept'], this.serviceOptions_recept, true);
      }
    }
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['lunch'].expandSlotTemplateString("search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_lunch’)", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_lunch.servicePath = servicePath;
        this.loadData_recept(this.dataSheets['lunch'], this.serviceOptions_lunch, true);
      }
    }
    {
      let usedSlots = [];
      let servicePath = this.dataSheets['middag2'].expandSlotTemplateString("search?key=c0dc2bc9e109859bdf0e577ad078e924&q=$slot('ds_dinner’)", this.dataSlots, usedSlots);
      if (usedSlots.includes(slotId)) {
        // if data sheet's content depends on this slot, reload it now
        this.serviceOptions_middag2.servicePath = servicePath;
        this.loadData_recept(this.dataSheets['middag2'], this.serviceOptions_middag2, true);
      }
    }
    this.setState({});
  }

  dataSheetDidUpdate = (dataSheet) => {
    // This method is the default implementation and could be customized by a state management plugin.
    this.setState({});
  }

  updateLocalizationFromDataSheet = (dataSheet) => {
    const stringsObj = dataSheet.getStringsByLanguage();
    if (stringsObj && Object.keys(stringsObj).length > 0) {
      this.locStrings = new LocalizedStrings(stringsObj);
    } else {
      this.locStrings = new LocalizedStrings({en: {}});
    }
    this.locStrings.setLanguage(this.dataSlots['ds_activeLang']);
  }

  loadData_recept = (dataSheet, options, firstLoad) => {
    // This method was written by data plugin 'Generic JSON'.
   this.setState({loading: true});
    
    // clear any placeholder data before load
    if (firstLoad) {
    	dataSheet.items = [];
    }
    
    const fetchComplete = (err) => {
      if (err) {
        // This error handling comes from React Studio
        // and currently doesn't do anything useful.
        console.error('** Web service load failed: ', err);
      } else {
      }
      this.setState({loading: false});
    }
    
    const url = dataSheet.urlFromOptions(options);  // this method was written by the web service plugin
    
    const fetchOpts = {
      method: 'GET',
      headers: {},
    };
    
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        dataSheet.loadFromJson(json);
        fetchComplete(null, options);
      })
      .catch((exc) => {
        fetchComplete(exc, options);
      });
  }

  render() {
    let makeElementForScreen = (screenId, baseProps, atTop, forward) => {
      let screenProps = {
        ...baseProps,
        atTopOfScreenStack: atTop,
        transitionForward: forward,
        appActions: this,
        dataSheets: this.dataSheets,
        locStrings: this.locStrings,
        deviceInfo: {
          screenFormatId: this.state.screenFormatId
        },
        'ds_activeLang': this.dataSlots['ds_activeLang'],
        'ds_kategori': this.dataSlots['ds_kategori'],
        'ds_lunch': this.dataSlots['ds_lunch'],
        'ds_middag': this.dataSlots['ds_middag'],
      };
      switch (screenId) {
        default:
          return null;
        case 'frukost':
          return (<FrukostScreen {...screenProps} />)
        case 'lunch2':
          return (<Lunch2Screen {...screenProps} />)
        case 'middag':
          return (<MiddagScreen {...screenProps} />)
        case 'start':
          return (<StartScreen {...screenProps} />)
      }
    }

    let screenEl = makeElementForScreen(this.state.currentScreen, this.state.currentScreenProps, true, this.state.screenTransitionForward);
    let prevScreenEl = null;
    if (this.screenHistory.length >= 2) {  // For transitions, we want to show the previous screen below
      let prevScreenState = this.screenHistory[this.screenHistory.length - 2];
      prevScreenEl = makeElementForScreen(prevScreenState.currentScreen, prevScreenState.currentScreenProps, false, this.state.screenTransitionForward);
    }

    return (
      <div className="App">
        {prevScreenEl}
        {screenEl}
      </div>
    );
  }
}
