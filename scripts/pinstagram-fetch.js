require("dotenv").config();

var fs = require("fs");
var axios = require("axios");
var chalk = require("chalk");
var collectionData = require("../pinstagram/collection.json");

var collection = { items: [] };
var dataObj = {};

var getItemData = function () {
  return collectionData.items.map(function (itemUrl) {
    return axios
      .get(
        `https://graph.facebook.com/v9.0/instagram_oembed?url=${itemUrl}&access_token=${process.env.IG_ACCESS_TOKEN}&omitscript=true`
      )
      .then(function (res) {
        console.log(chalk.green("Fetched: " + itemUrl));
        return res;
      })
      .catch(function (error) {
        console.error(chalk.red("Error 404 fetching item: " + itemUrl));
      });
  });
};

console.log("Fetching data...");

axios
  .all(getItemData())
  .then(
    axios.spread(function (...args) {
      dataObj.items = args
        // append URL property to each item
        .map((item, i) => {
          if (item != undefined) {
            item.data.url = collectionData.items[i];
            return item;
          }
        })
        // filter out items that have errored
        .filter((item) => item != undefined)
        // push successful items to updated collection
        .map((item) => {
          collection.items.push(item.data.url);
          return item;
        })
        .map((item) => {
          // clear out excessive embed html data
          item.data.html = "";
          return item.data;
        });

      // re-write collection with 404s removed
      fs.writeFile(
        "./pinstagram/collection.json",
        JSON.stringify(collection, null, 2),
        "utf8",
        function (err) {
          if (err) throw err;
          console.log("404s removed. Updated pinstagram/collection.json");
        }
      );

      // write full collection data
      fs.writeFile(
        "./pinstagram/collectionFetched.json",
        JSON.stringify(dataObj),
        "utf8",
        function (err) {
          if (err) throw err;
          console.log(
            "Data fetched. Written to pinstagram/collectionFetched.json"
          );
        }
      );
    })
  )
  .catch(function (error) {
    console.log(error);
  });
