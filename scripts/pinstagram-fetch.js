var fs = require('fs');
var axios = require('axios');
var collectionData = require('../pinstagram/collection.json');

var dataObj = {};

var getItemData = function () {
  return collectionData.items.map(function(itemUrl) {
    return axios.get('https://api.instagram.com/oembed/?url=' + itemUrl + '&omitscript=true');
  });
}

console.log('Fetching data...')

axios.all(getItemData())
  .then(axios.spread(function (...args) {

    dataObj.items = args.map(function(item, i) {
      return Object.assign({}, { url: collectionData.items[i] }, item.data);
    })

    fs.writeFile('./pinstagram/collectionFetched.json', JSON.stringify(dataObj), 'utf8', function (err) {
      if (err) throw err;
      console.log('Data fetched. Written to pinstagram/collectionFetched.json');
    });
  }))
  .catch(function (error) {
    console.log(error);
  });
