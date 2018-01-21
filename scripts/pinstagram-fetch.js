var fs = require('fs');
var axios = require('axios');
var collectionData = require('../pinstagram/collection.json');

var dataObj = {};

var getItemData = function () {
  return collectionData.items.map(function(itemUrl) {
    return axios.get('https://api.instagram.com/oembed/?url=' + itemUrl + '&omitscript=true')
      .catch(function (error) {
        console.log('Error 404 fetching item:', itemUrl);
      });
  });
}

console.log('Fetching data...')

axios.all(getItemData())
  .then(axios.spread(function (...args) {

    dataObj.items = args
      // append URL property to each item
      .map((item, i) => {
        if (item != undefined) {
          item.data.url = collectionData.items[i];
          return item
        }
      })
      // filter out items that have errored
      .filter(item => item != undefined)
      .map(item => {
        // clear out excessive embed html data
        item.data.html = '';
        return item.data;
      });

    fs.writeFile('./pinstagram/collectionFetched.json', JSON.stringify(dataObj), 'utf8', function (err) {
      if (err) throw err;
      console.log('Data fetched. Written to pinstagram/collectionFetched.json');
    });
  }))
  .catch(function (error) {
    console.log(error);
  });
