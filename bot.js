
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'bpyCRWKfwgY5GSx4pzuCRSR9K',
  consumer_secret:      'WQC2lOiYuBgaPInNTHL1e96G6sSJtpijRm1VU2OxiqvH3VuXVQ',
  access_token:         '962329169911787521-SbMaoKnkwNWPvo0xT2tZmxVomGxuARD',
  access_token_secret:  'cNkH0RMa9rVMZwX7r71Fqvhnfz2hbGPybujvmYzS76hpj',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

var  tweet = {
  status: "This is a test tweet from an automated bot.2"
}

T.post('statuses/update', tweet, callTweet);

function callTweet(err, data, response){
  if(err){
    console.log("Error");

  }
  else {
    console.log("It works!")
  }

}



var search = {
  q: "taylor since:2009-09-27"
}

T.get('search/tweets'), search, callTweet);

function callTweet(err, data, response){
  if(err){
    console.log("Error");

  }
  else {
    console.log("It works!")
  }

}
