var express = require('express');
var router = express.Router();

// var ig = require('instagram-node').instagram();
// ig.use({ "client_id": "e18d8396d6854b62aafd92f09cb6ba3a", "client_secret": "271cd08d60b9422d826e3dedd706c23b" });

//var popular_cache = {};

// function get_most_popular(callback) {

//var timeout = 5;

// if(popular_cache.media && (new Date).getTime() < popular_cache.timeout) {
//   return callback(null, popular_cache.media, popular_cache.limit);
// }

//  ig.media_popular(funstion (err,media,limit){
// popular_cache = {
//   "media": media,
//   "limit": limit,
//   "timeout": (+(new Date())) + (timeout * 1000)
// }

//return callback(err, media, limit);
//});
// }


/* GET home page. */
router.get('/', function(req, res, next) {
  
  // get_most_popular(function(err, media, limit){
  //   if(err) { throw err; }
  // 
  // var urls = [];
  // for(var i=0;i<media.length;i++){
  //   urls.push(media[i].images.standard_resolution.url);
  // }

  // res.render('popular', { urls: urls});
  res.render('popular');
});
});
module.exports = router;
