import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_lunch extends DataSheetBase {

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
    item['recipe_id'] = "47890";
    item['social_rank'] = "99.99756057189138";
    item['image_url'] = "http://static.food2fork.com/an_ideal_lunch_saladd9cf.jpg";
    item['title'] = "An Ideal Lunch Salad";
    item['f2f_url'] = "http://food2fork.com/view/47890";
    item['publisher'] = "101 Cookbooks";
    item['publisher_url'] = "http://www.101cookbooks.com";
    item['source_url'] = "http://www.101cookbooks.com/archives/an-ideal-lunch-salad-recipe.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "48092";
    item['social_rank'] = "84.52536691735388";
    item['image_url'] = "http://static.food2fork.com/oxbowpasta7b59.jpg";
    item['title'] = "Best School Lunch: Sicilian Broccoli and Cauliflower Pasta";
    item['f2f_url'] = "http://food2fork.com/view/48092";
    item['publisher'] = "101 Cookbooks";
    item['publisher_url'] = "http://www.101cookbooks.com";
    item['source_url'] = "http://www.101cookbooks.com/archives/000146.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "20607";
    item['social_rank'] = "84.3156349569512";
    item['image_url'] = "http://static.food2fork.com/100136020d7.jpg";
    item['title'] = "Lunch Box Hot Hot Dogs";
    item['f2f_url'] = "http://food2fork.com/view/20607";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Lunch-Box-Hot-Hot-Dogs/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "5835a3";
    item['social_rank'] = "76.69560975192094";
    item['image_url'] = "http://static.food2fork.com/1840654_MEDIUMf95e.jpg";
    item['title'] = "Complete Christmas lunch";
    item['f2f_url'] = "http://food2fork.com/view/5835a3";
    item['publisher'] = "BBC Good Food";
    item['publisher_url'] = "http://www.bbcgoodfood.com";
    item['source_url'] = "http://www.bbcgoodfood.com/recipes/1840654/complete-christmas-lunch-";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "20934";
    item['social_rank'] = "57.38387155675309";
    item['image_url'] = "http://static.food2fork.com/61473413e1.jpg";
    item['title'] = "Make Ahead Lunch Wraps";
    item['f2f_url'] = "http://food2fork.com/view/20934";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Make-Ahead-Lunch-Wraps/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "27923";
    item['social_rank'] = "47.56118085286523";
    item['image_url'] = "http://static.food2fork.com/195868500c.jpg";
    item['title'] = "School Lunch Bagel Sandwich";
    item['f2f_url'] = "http://food2fork.com/view/27923";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/School-Lunch-Bagel-Sandwich/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "336043";
    item['social_rank'] = "46.2976169723492";
    item['image_url'] = "http://static.food2fork.com/IMG_25456b9d.jpg";
    item['title'] = "Cooking For One: Veggie Burgers and a Lunch Out";
    item['f2f_url'] = "http://food2fork.com/view/336043";
    item['publisher'] = "Big Girls Small Kitchen";
    item['publisher_url'] = "http://www.biggirlssmallkitchen.com/";
    item['source_url'] = "http://www.biggirlssmallkitchen.com/2009/11/cooking-for-one-veggie-burgers-and.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "20609";
    item['social_rank'] = "43.09260588554989";
    item['image_url'] = "http://static.food2fork.com/79745839eb.jpg";
    item['title'] = "Lunch Box Pita Pockets";
    item['f2f_url'] = "http://food2fork.com/view/20609";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Lunch-Box-Pita-Pockets/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "16599";
    item['social_rank'] = "41.99475127246186";
    item['image_url'] = "http://static.food2fork.com/658449c99b.jpg";
    item['title'] = "Homemade Lunch Combination";
    item['f2f_url'] = "http://food2fork.com/view/16599";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Homemade-Lunch-Combination/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "5094";
    item['social_rank'] = "37.25906762554896";
    item['image_url'] = "http://static.food2fork.com/467639696e.jpg";
    item['title'] = "Bum's Lunch";
    item['f2f_url'] = "http://food2fork.com/view/5094";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Bums-Lunch/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "43b795";
    item['social_rank'] = "35.67456472556403";
    item['image_url'] = "http://static.food2fork.com/9557864842.jpg";
    item['title'] = "Busy Day Lunch Salad";
    item['f2f_url'] = "http://food2fork.com/view/43b795";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Busy-Day-Lunch-Salad/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "47556";
    item['social_rank'] = "35.39267528688108";
    item['image_url'] = "http://static.food2fork.com/okra357b5bf75.0.jpg";
    item['title'] = "Lunch ladies and fried okra";
    item['f2f_url'] = "http://food2fork.com/view/47556";
    item['publisher'] = "Homesick Texan";
    item['publisher_url'] = "http://homesicktexan.blogspot.com";
    item['source_url'] = "http://homesicktexan.blogspot.com/2006/09/lunch-ladies-and-fried-okra.html";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "a928b5";
    item['social_rank'] = "35.38316530269348";
    item['image_url'] = "http://static.food2fork.com/IMG_5302410x3076565.jpg";
    item['title'] = "Chocolate-Peanut Butter Marshmallow Lunch Box Bars";
    item['f2f_url'] = "http://food2fork.com/view/a928b5";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/desserts/chocolate-peanut-butter-marshmallow-lunch-box-bars/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "80f242";
    item['social_rank'] = "35.15494754930466";
    item['image_url'] = "http://static.food2fork.com/NotYourLunchLadysGoulashtxt2410x2844ad4.jpg";
    item['title'] = "Not Your Lunch Ladys Goulash";
    item['f2f_url'] = "http://food2fork.com/view/80f242";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/main-courses/not-your-lunch-ladye28099s-goulash/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "7c4dd3";
    item['social_rank'] = "34.9674173100795";
    item['image_url'] = "http://static.food2fork.com/6131149709_c54809a0ba_o410x2740281.jpg";
    item['title'] = "Lunch Lady Sloppy Joes";
    item['f2f_url'] = "http://food2fork.com/view/7c4dd3";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/main-courses/lunch-lady-sloppy-joes/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "309b5b";
    item['social_rank'] = "34.95401071522468";
    item['image_url'] = "http://static.food2fork.com/DSC04029410x30364d7.jpeg";
    item['title'] = "Healthy Lunch Box Ramen";
    item['f2f_url'] = "http://food2fork.com/view/309b5b";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/soups/healthy-lunch-box-ramen/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "43351";
    item['social_rank'] = "34.94299474236667";
    item['image_url'] = "http://static.food2fork.com/recipe142174ed6.jpg";
    item['title'] = "Greek Salad Lunch Salad";
    item['f2f_url'] = "http://food2fork.com/view/43351";
    item['publisher'] = "Cookstr";
    item['publisher_url'] = "http://www.cookstr.com";
    item['source_url'] = "http://www.cookstr.com/recipes/greek-salad-lunch-salad";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "31245";
    item['social_rank'] = "34.94299474236667";
    item['image_url'] = "http://static.food2fork.com/6168257a2f.jpg";
    item['title'] = "Sunday Lunch Soup";
    item['f2f_url'] = "http://food2fork.com/view/31245";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Sunday-Lunch-Soup/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "3ea763";
    item['social_rank'] = "34.92885704502602";
    item['image_url'] = "http://static.food2fork.com/LunchPasta410x29605a5.jpg";
    item['title'] = "Lunch Pasta";
    item['f2f_url'] = "http://food2fork.com/view/3ea763";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/main-courses/lunch-pasta/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "06d9fe";
    item['social_rank'] = "34.91233636198501";
    item['image_url'] = "http://static.food2fork.com/pizzacups410x546fb01.png";
    item['title'] = "Lunch Box Pizza";
    item['f2f_url'] = "http://food2fork.com/view/06d9fe";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/main-courses/lunch-box-pizza/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "35001";
    item['social_rank'] = "34.85178701529291";
    item['image_url'] = "http://static.food2fork.com/8571474cd7.jpg";
    item['title'] = "Zucchini for Lunch";
    item['f2f_url'] = "http://food2fork.com/view/35001";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Zucchini-For-Lunch/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "6424";
    item['social_rank'] = "34.84628459797327";
    item['image_url'] = "http://static.food2fork.com/94074372ed.jpg";
    item['title'] = "Cheese Quesadilla Lunch";
    item['f2f_url'] = "http://food2fork.com/view/6424";
    item['publisher'] = "All Recipes";
    item['publisher_url'] = "http://allrecipes.com";
    item['source_url'] = "http://allrecipes.com/Recipe/Cheese-Quesadilla-Lunch/Detail.aspx";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "45218";
    item['social_rank'] = "34.813277353533";
    item['image_url'] = "http://static.food2fork.com/recipe211152790.jpg";
    item['title'] = "Grits for Breakfast, Lunch or Dinner";
    item['f2f_url'] = "http://food2fork.com/view/45218";
    item['publisher'] = "Cookstr";
    item['publisher_url'] = "http://www.cookstr.com";
    item['source_url'] = "http://www.cookstr.com/recipes/grits-for-breakfast-lunch-or-dinner";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "02eecb";
    item['social_rank'] = "34.80777735743579";
    item['image_url'] = "http://static.food2fork.com/DSCN9804db12.jpg";
    item['title'] = "Specialty Salad Lunch for One  Made with Leftovers";
    item['f2f_url'] = "http://food2fork.com/view/02eecb";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/salads/specialty-salad-lunch-for-one-e28093-made-with-leftovers/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "268232";
    item['social_rank'] = "34.80777735743579";
    item['image_url'] = "http://static.food2fork.com/food011410x3262696.jpg";
    item['title'] = "Raspberry Fruit for Lunches";
    item['f2f_url'] = "http://food2fork.com/view/268232";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/salads/raspberry-fruit-for-lunches/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "48cc97";
    item['social_rank'] = "34.80777735743579";
    item['image_url'] = "http://static.food2fork.com/0031410x227eb30.jpg";
    item['title'] = "Ploughmans Lunch";
    item['f2f_url'] = "http://food2fork.com/view/48cc97";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/special-dietary-needs/ploughmane28099s-lunch/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "d52272";
    item['social_rank'] = "34.80777735743579";
    item['image_url'] = "http://static.food2fork.com/ScreenShot20110725at4f850.00.31AM410x316.png";
    item['title'] = "Majbuoss  A Very Delicious Lunch";
    item['f2f_url'] = "http://food2fork.com/view/d52272";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/main-courses/majbuoss-e28093-a-very-delicious-lunch/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "10a381";
    item['social_rank'] = "34.80777735743579";
    item['image_url'] = "http://static.food2fork.com/IMG_2011bajaA410x61485e7.jpg";
    item['title'] = "A Pintxo (Tapa) Before Sunday Lunch";
    item['f2f_url'] = "http://food2fork.com/view/10a381";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/appetizers-and-snacks/a-pintxo-tapa-before-sunday-lunch/";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['recipe_id'] = "3fe991";
    item['social_rank'] = "34.80777735743579";
    item['image_url'] = "http://static.food2fork.com/noimage2f00.recipeimage.gif";
    item['title'] = "Julies Peanut Butter Fingers (Like the Lunch Lady Used To Make Em)";
    item['f2f_url'] = "http://food2fork.com/view/3fe991";
    item['publisher'] = "Tasty Kitchen";
    item['publisher_url'] = "http://tastykitchen.com";
    item['source_url'] = "http://tastykitchen.com/recipes/desserts/juliee28099s-peanut-butter-fingers-like-the-lunch-lady-used-to-make-em/";
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
