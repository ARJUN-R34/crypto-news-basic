var CryptoNewsAPI = require('crypto-news-api').default
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    pageTitle: 'INBLOX',
    path: '/'
  });
});

router.get('/crypto-news', function(req, res, next) {

  const Api = new CryptoNewsAPI('69f6b9c923c2d30dc272674f425337cf');

  Api.getTopNews()
    .then(function (articles) {
      console.log("Articles : ");
      res.render('products', {
        pageTitle: 'Products',
        path: '/products',
        response: articles
      });
    })
    .catch(function (error) {
      console.log("Error : " , error);
    });
  
});

module.exports = router;
