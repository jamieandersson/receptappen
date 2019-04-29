import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_984757";
    item['en'] = "VAD ÄR DU SUGEN PÅ?";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_666328";
    item['en'] = "New button";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_787522";
    item['en'] = "Frukost";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_413048";
    item['en'] = "Middag";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_buttoncopy_154836";
    item['en'] = "Lunch";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_button_643399";
    item['en'] = "Frukost";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_buttoncopy_724252";
    item['en'] = "Middag";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_buttoncopy2_502961";
    item['en'] = "Lunch";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem2_button_355708";
    item['en'] = "Frukost";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem2_buttoncopy_539635";
    item['en'] = "Middag";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem2_buttoncopy2_331591";
    item['en'] = "Lunch";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button_944775";
    item['en'] = "Frukost";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button2_815856";
    item['en'] = "Lunch";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_button3_782400";
    item['en'] = "Middag";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_button_958860";
    item['en'] = "Frukost";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_button2_560555";
    item['en'] = "Lunch";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_button3_75240";
    item['en'] = "Middag";
    
    item = {};
    this.items.push(item);
    item['key'] = "receptllista_text_79512";
    item['en'] = "Title";
    
    item = {};
    this.items.push(item);
    item['key'] = "receptllista_text_203257";
    item['en'] = "Author";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_text_751039";
    item['en'] = "Title";
    
    item = {};
    this.items.push(item);
    item['key'] = "comp1_textcopy_888939";
    item['en'] = "Author";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
