const key = require('../config/key');
const Twit = require('twit');

const tObj = new Twit({
  consumer_key: key.twitConsumerKey,
  consumer_secret: key.twitConsumerSecret,
  access_token: key.twitAccessToken,
  access_token_secret : key.twitAccessTokenSecret
})


module.exports= (app) => {

  app.use('/api/twit/home_timeline', (req, res)=>{
    tObj.get('statuses/home_timeline', (err, data, response) => {
      res.send(data);
    });
  });


  app.use('/api/twit/statuses/show/*', (req, res)=>{

    let id = req.originalUrl.split('/')[5];
    let url = "/statuses/show/" + id
    console.log(url);

    tObj.get(url, (err, data, response) => {
      console.log(data);
      res.send(data);
    });
  })

  app.use('/api/twit/statuses/lookup/*', (req, res)=>{
    let user_id = req.originalUrl.split('/')[5];
    console.log(user_id);
    tObj.get('/statuses/lookup',{id : user_id}, (err, data, response) => {
      console.log(data);
      res.send(data);
    });
  });

   app.use('/api/twit/users/show/*', (req, res)=>{
    let user_id = req.originalUrl.split('/')[5];
    tObj.get('/users/show',{user_id : user_id}, (err, data, response) => {
      console.log(data);
      res.send(data);
    });
  });

  app.use('/api/twit/trends/place/*', (req, res)=>{
    let wdid = req.originalUrl.split('/')[5];
    tObj.get('/trends/place',{id : wdid}, (err, data, response) => {
      res.send(data);
    });
  });

  app.use('/api/account', (req, res)=>{
    tObj.get('/account/verify_credentials', (err, data, response) => {
      res.send(data);
    });
  });

  app.use('/api/account/settings', (req, res)=>{
    tObj.get('/account/settings', (err, data, response) => {
      res.send(data);
    });
  });

}
