import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_recept extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "recipes";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Generic JSON'.
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "7d8e83";
    item['social_rank'] = "99.99999999712918";
    item['image_url'] = "http://static.food2fork.com/breakfastquesadilladc70.jpg";
    item['title'] = "Breakfast Quesdillas";
    item['f2f_url'] = "http://food2fork.com/view/7d8e83";
    item['publisher'] = "The Pioneer Woman";
    item['publisher_url'] = "http://thepioneerwoman.com";
    item['source_url'] = "http://thepioneerwoman.com/cooking/2013/04/breakfast-quesadillas/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "35097";
    item['social_rank'] = "99.99999990783806";
    item['image_url'] = "http://static.food2fork.com/Avocado2Band2BFried2BEgg2BBreakfast2BPizza2B5002B296294dcea8a.jpg";
    item['title'] = "Avocado Breakfast Pizza with Fried Egg";
    item['f2f_url'] = "http://food2fork.com/view/35097";
    item['publisher'] = "Closet Cooking";
    item['publisher_url'] = "http://closetcooking.com";
    item['source_url'] = "http://www.closetcooking.com/2012/07/avocado-breakfast-pizza-with-fried-egg.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "66181b";
    item['social_rank'] = "99.99999776006099";
    item['image_url'] = "http://static.food2fork.com/36613022ec.jpg";
    item['title'] = "Cinnamon-Scented Breakfast Quinoa";
    item['f2f_url'] = "http://food2fork.com/view/66181b";
    item['publisher'] = "Epicurious";
    item['publisher_url'] = "http://www.epicurious.com";
    item['source_url'] = "http://www.epicurious.com/recipes/food/views/Cinnamon-Scented-Breakfast-Quinoa-366130";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "35113";
    item['social_rank'] = "99.99999738945647";
    item['image_url'] = "http://static.food2fork.com/Bacon2BJam2BBreakfast2BSandwich2Bwith2BFried2BEgg2Band2BAvocado2B5002B995922913bc2.jpg";
    item['title'] = "Bacon Jam Breakfast Sandwich with Fried Egg and Avocado";
    item['f2f_url'] = "http://food2fork.com/view/35113";
    item['publisher'] = "Closet Cooking";
    item['publisher_url'] = "http://closetcooking.com";
    item['source_url'] = "http://www.closetcooking.com/2012/12/bacon-jam-breakfast-sandwich-with-fried.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "47348";
    item['social_rank'] = "99.99999221989535";
    item['image_url'] = "http://static.food2fork.com/2110061094_30b1545cb5c489.jpg";
    item['title'] = "French Breakfast Puffs";
    item['f2f_url'] = "http://food2fork.com/view/47348";
    item['publisher'] = "The Pioneer Woman";
    item['publisher_url'] = "http://thepioneerwoman.com";
    item['source_url'] = "http://thepioneerwoman.com/cooking/2007/12/french_breakfast_puffs/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "6e5646";
    item['social_rank'] = "99.99999190924824";
    item['image_url'] = "http://static.food2fork.com/breakfast_bars_dsc_0620a630.jpg";
    item['title'] = "Breakfast Bars";
    item['f2f_url'] = "http://food2fork.com/view/6e5646";
    item['publisher'] = "Elana's Pantry";
    item['publisher_url'] = "http://www.elanaspantry.com";
    item['source_url'] = "http://www.elanaspantry.com/breakfast-bars/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "0adaeb";
    item['social_rank'] = "99.99996037254769";
    item['image_url'] = "http://static.food2fork.com/paleobreakfastbreadrecipeDSC_5457eca8.jpg";
    item['title'] = "Paleo Breakfast Bread: Video";
    item['f2f_url'] = "http://food2fork.com/view/0adaeb";
    item['publisher'] = "Elana's Pantry";
    item['publisher_url'] = "http://www.elanaspantry.com";
    item['source_url'] = "http://www.elanaspantry.com/paleo-breakfast-bread/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "35164";
    item['social_rank'] = "99.99996027166368";
    item['image_url'] = "http://static.food2fork.com/Breakfast2BGrilled2BCheese2Bwith2BMaple2BSyrup2B5002B8042741df7ca.jpg";
    item['title'] = "Breakfast Grilled Cheese Sandwich with Maple Syrup";
    item['f2f_url'] = "http://food2fork.com/view/35164";
    item['publisher'] = "Closet Cooking";
    item['publisher_url'] = "http://closetcooking.com";
    item['source_url'] = "http://www.closetcooking.com/2011/12/breakfast-grilled-cheese-sandwich-with.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "28d71e";
    item['social_rank'] = "99.99995076785578";
    item['image_url'] = "http://static.food2fork.com/30076_breakfast_pita_pizza_620eb14.jpg";
    item['title'] = "Breakfast Pita-Pizza Recipe";
    item['f2f_url'] = "http://food2fork.com/view/28d71e";
    item['publisher'] = "Chow";
    item['publisher_url'] = "http://www.chow.com";
    item['source_url'] = "http://www.chow.com/recipes/30076-breakfast-pita-pizza";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "41456";
    item['social_rank'] = "99.99989440981489";
    item['image_url'] = "http://static.food2fork.com/Breakfast2BQueso2BFundido2B5002B2901547774d8.jpg";
    item['title'] = "Breakfast Queso Fundido";
    item['f2f_url'] = "http://food2fork.com/view/41456";
    item['publisher'] = "Closet Cooking";
    item['publisher_url'] = "http://closetcooking.com";
    item['source_url'] = "http://www.closetcooking.com/2013/01/breakfast-queso-fundido.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "30791";
    item['social_rank'] = "99.99988391898697";
    item['image_url'] = "http://static.food2fork.com/409456251d.jpg";
    item['title'] = "Strawberry Oatmeal Breakfast Smoothie";
    item['f2f_url'] = "http://food2fork.com/view/30791";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Strawberry-Oatmeal-Breakfast-Smoothie/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "36886";
    item['social_rank'] = "99.99984550356992";
    item['image_url'] = "http://static.food2fork.com/sausagebrunchcasserole300x2004dd9915c.jpg";
    item['title'] = "Sausage Breakfast Casserole";
    item['f2f_url'] = "http://food2fork.com/view/36886";
    item['publisher'] = "Simply Recipes";
    item['publisher_url'] = "http://simplyrecipes.com";
    item['source_url'] = "http://www.simplyrecipes.com/recipes/sausage_breakfast_casserole/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "492271";
    item['social_rank'] = "99.99978084103788";
    item['image_url'] = "http://static.food2fork.com/PaleoBreakfastBars0657719d.jpg";
    item['title'] = "Paleo Breakfast Bars";
    item['f2f_url'] = "http://food2fork.com/view/492271";
    item['publisher'] = "Elana's Pantry";
    item['publisher_url'] = "http://www.elanaspantry.com";
    item['source_url'] = "http://www.elanaspantry.com/paleo-breakfast-bars/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "9a6a98";
    item['social_rank'] = "99.99577466044562";
    item['image_url'] = "http://static.food2fork.com/mangobreakfastquinoa1550x36897b2.jpg";
    item['title'] = "All Recipes";
    item['f2f_url'] = "http://food2fork.com/view/9a6a98";
    item['publisher'] = "Cookie and Kate";
    item['publisher_url'] = "http://cookieandkate.com";
    item['source_url'] = "http://cookieandkate.com/2011/breakfast-quinoa/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "419ddf";
    item['social_rank'] = "99.99972659075107";
    item['image_url'] = "http://static.food2fork.com/4420552280_bb575420043571.jpg";
    item['title'] = "breakfast pizza";
    item['f2f_url'] = "http://food2fork.com/view/419ddf";
    item['publisher'] = "Smitten Kitchen";
    item['publisher_url'] = "http://www.smittenkitchen.com";
    item['source_url'] = "http://smittenkitchen.com/blog/2010/03/breakfast-pizza/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "6f38aa";
    item['social_rank'] = "99.99944260957548";
    item['image_url'] = "http://static.food2fork.com/30314_RecipeImage_620x413_breakfast_scotch_eggsbe55.jpg";
    item['title'] = "Breakfast Sausage and Cornflake Scotch Eggs Recipe";
    item['f2f_url'] = "http://food2fork.com/view/6f38aa";
    item['publisher'] = "Chow";
    item['publisher_url'] = "http://www.chow.com";
    item['source_url'] = "http://www.chow.com/recipes/30314-breakfast-sausage-and-cornflake-scotch-eggs";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "8586";
    item['social_rank'] = "99.99919179271886";
    item['image_url'] = "http://static.food2fork.com/392254b0f1.jpg";
    item['title'] = "Christmas Breakfast Sausage Casserole";
    item['f2f_url'] = "http://food2fork.com/view/8586";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Christmas-Breakfast-Sausage-Casserole/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "ad9e38";
    item['social_rank'] = "99.99604918159223";
    item['image_url'] = "http://static.food2fork.com/IMG_4852180x1808114.jpg";
    item['title'] = "Toasted Coconut Breakfast Spread";
    item['f2f_url'] = "http://food2fork.com/view/ad9e38";
    item['publisher'] = "A Spicy Perspective";
    item['publisher_url'] = "http://www.aspicyperspective.com";
    item['source_url'] = "http://www.aspicyperspective.com/2013/02/toasted-coconut-breakfast-spread.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "3870a5";
    item['social_rank'] = "99.99080019423843";
    item['image_url'] = "http://static.food2fork.com/IMG_5976180x180c90f.jpg";
    item['title'] = "Quick Breakfast Muffins";
    item['f2f_url'] = "http://food2fork.com/view/3870a5";
    item['publisher'] = "A Spicy Perspective";
    item['publisher_url'] = "http://www.aspicyperspective.com";
    item['source_url'] = "http://www.aspicyperspective.com/2013/03/quick-breakfast-muffins-mexican-dish.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "e53a28";
    item['social_rank'] = "99.98742479331727";
    item['image_url'] = "http://static.food2fork.com/12ac6f.jpg";
    item['title'] = "Baked Egg Breakfast Casserole with Mushrooms, Spinach & Salsa";
    item['f2f_url'] = "http://food2fork.com/view/e53a28";
    item['publisher'] = "Cookin Canuck";
    item['publisher_url'] = "http://www.cookincanuck.com";
    item['source_url'] = "http://www.cookincanuck.com/2012/10/baked-egg-breakfast-casserole-with-mushrooms-spinach-salsa-recipe/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "9a14be";
    item['social_rank'] = "99.98570511232052";
    item['image_url'] = "http://static.food2fork.com/28513_egg_salmon_breakfast_sandwich_620bb71.jpg";
    item['title'] = "Egg and Smoked Salmon Open-Faced Breakfast Sandwich Recipe";
    item['f2f_url'] = "http://food2fork.com/view/9a14be";
    item['publisher'] = "Chow";
    item['publisher_url'] = "http://www.chow.com";
    item['source_url'] = "http://www.chow.com/recipes/28513-egg-and-smoked-salmon-open-faced-breakfast-sandwich";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "201b74";
    item['social_rank'] = "99.98561545755361";
    item['image_url'] = "http://static.food2fork.com/5820_MEDIUM3904.jpg";
    item['title'] = "The ultimate makeover: Full English breakfast";
    item['f2f_url'] = "http://food2fork.com/view/201b74";
    item['publisher'] = "BBC Good Food";
    item['publisher_url'] = "http://www.bbcgoodfood.com";
    item['source_url'] = "http://www.bbcgoodfood.com/recipes/5820/the-ultimate-makeover-full-english-breakfast";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "68a685";
    item['social_rank'] = "99.98045603612719";
    item['image_url'] = "http://static.food2fork.com/CustomizableBreadBowlBreakfast410x2733898.jpg";
    item['title'] = "Customizable Bread Bowl Breakfast";
    item['f2f_url'] = "http://food2fork.com/view/68a685";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/breakfastbrunch/customizable-bread-bowl-breakfast/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "a83613";
    item['social_rank'] = "99.97034168972314";
    item['image_url'] = "http://static.food2fork.com/30484_RecipeImage_620x413_breakfast_queso_fundido_480be.jpg";
    item['title'] = "Breakfast Queso Fundido Recipe";
    item['f2f_url'] = "http://food2fork.com/view/a83613";
    item['publisher'] = "Chow";
    item['publisher_url'] = "http://www.chow.com";
    item['source_url'] = "http://www.chow.com/recipes/30484-breakfast-queso-fundido";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "92fd61";
    item['social_rank'] = "99.96262691640045";
    item['image_url'] = "http://static.food2fork.com/2821165027_d33cd2632de434.jpg";
    item['title'] = "raspberry breakfast bars";
    item['f2f_url'] = "http://food2fork.com/view/92fd61";
    item['publisher'] = "Smitten Kitchen";
    item['publisher_url'] = "http://www.smittenkitchen.com";
    item['source_url'] = "http://smittenkitchen.com/blog/2008/09/raspberry-breakfast-bars/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "35163";
    item['social_rank'] = "99.95183613241815";
    item['image_url'] = "http://static.food2fork.com/Breakfast2BChorizo2BQuesadillas2BTopped2Bwith2Ba2BFried2BEgg2B5002B0676a6dd3e40.jpg";
    item['title'] = "Breakfast Chorizo Quesadilla Topped with a Fried Egg";
    item['f2f_url'] = "http://food2fork.com/view/35163";
    item['publisher'] = "Closet Cooking";
    item['publisher_url'] = "http://closetcooking.com";
    item['source_url'] = "http://www.closetcooking.com/2012/07/breakfast-chorizo-quesadilla-topped.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "35235";
    item['social_rank'] = "99.94371957406051";
    item['image_url'] = "http://static.food2fork.com/Chorizo2BScrambled2BEggs2BBreakfast2BTacos2B5002B9571376498a3.jpg";
    item['title'] = "Chorizo Scrambled Eggs Breakfast Tacos";
    item['f2f_url'] = "http://food2fork.com/view/35235";
    item['publisher'] = "Closet Cooking";
    item['publisher_url'] = "http://closetcooking.com";
    item['source_url'] = "http://www.closetcooking.com/2012/03/chorizo-scrambled-eggs-breakfast-tacos.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "11778";
    item['social_rank'] = "99.92151331141007";
    item['image_url'] = "http://static.food2fork.com/81700783b3.jpg";
    item['title'] = "Easter Breakfast Casserole";
    item['f2f_url'] = "http://food2fork.com/view/11778";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Easter-Breakfast-Casserole/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "c1af55";
    item['social_rank'] = "99.91353797599287";
    item['image_url'] = "http://static.food2fork.com/7650506124_4a7fb7077e0c6e.jpg";
    item['title'] = "Southwestern Breakfast Quesadilla Recipe with Eggs, Black Beans & Salsa";
    item['f2f_url'] = "http://food2fork.com/view/c1af55";
    item['publisher'] = "Cookin Canuck";
    item['publisher_url'] = "http://www.cookincanuck.com";
    item['source_url'] = "http://www.cookincanuck.com/2012/07/southwestern-breakfast-quesadilla-recipe-with-eggs-black-beans-salsa/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "d80b1b";
    item['social_rank'] = "99.87248490739705";
    item['image_url'] = "http://static.food2fork.com/breakfastpowersmoothie529591c6.jpg";
    item['title'] = "Breakfast Power Smoothie";
    item['f2f_url'] = "http://food2fork.com/view/d80b1b";
    item['publisher'] = "Elana's Pantry";
    item['publisher_url'] = "http://www.elanaspantry.com";
    item['source_url'] = "http://www.elanaspantry.com/breakfast-power-smoothie/";
    item.key = key++;
  }

  
  urlFromOptions(options) {
    const baseUrl = "https://www.food2fork.com/api/";
    
    let path = options.servicePath || '';
    if (path.length > 0 && path.substr(0, 1) !== '/' && baseUrl.substr(baseUrl.length - 1, 1) !== '/')
      path = '/'+path;
  
    let query = options.query || '';
    if (query.length > 0) {
      const dataSlots = options.dataSlots || {};
      query = "?" + this.expandSlotTemplateString(query, dataSlots);
    }
  
    return baseUrl + path + query; 
  }
  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  addItem(item, options) {
    super.addItem(item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'POST',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  removeItem(item, options) {
    super.removeItem(item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'DELETE',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  replaceItemByRowIndex(idx, item, options) {
    super.replaceItemByRowIndex(idx, item, options);
    
    const url = this.urlFromOptions(options);
    
    let headers = {};
    headers['Content-Type'] = 'application/json';
  
    const fetchOpts = {
      method: 'PUT',
    	headers: headers,
    	body: JSON.stringify(item),
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          console.log("** Error sending %s to %s, response: ", fetchOpts.method, url, response);
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  

}
