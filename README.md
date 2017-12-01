# About Twittar
Twittar is a clone webpage from twitter.
Why do this ? It just for being familiar with frontend tech and practice.

It's built by express, react, redux.

For auth module is [twit](https://github.com/ttezel/twit), I will add auth in the future, let user can login with their account.

If you are looking for a sample about how to clone a webpage, you can reference here!

If you found any issue, you also can report it to here!

Just for fun and learn web world!!

# Preparation

Before start, you need to request twitter key and secret, then put these information in confg/key file

build your twitter to create comsumer keys and secret
[Twitter create an app](https://developer.twitter.com/en/docs/basics/getting-started)

Create your access token
[Twitter access token](https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens)

Create a config/key file as below:


    module.exports = {
      twitConsumerKey : <your key>,
      twitConsumerSecret :  <your secret>,
      twitAccessToken : <your access token>,
      twitAccessTokenSecret: <your access token secret>,
    }

### DO NOT commit ANY KEYS

## Install all packages 
this projects use yarn to install node pacakges.

if you don't have yarn, you can download and install it from here [Yarn install](https://yarnpkg.com/en/docs/install)

then install project packages



    yarn install
    cd twitta
    yarn install  // install pacakge in twitta 


# Run 
    yarn run dev

Then you will see result as below.
![ScreenShot](https://raw.github.com/fwfly/twittar/master/.screenshot/twittar.jpg)

