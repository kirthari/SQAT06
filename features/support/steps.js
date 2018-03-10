const { Given, When, Then } = require('cucumber')
const chai = require('chai')
const should = chai.should()

"use strict";


Given('I go to duck duck go', function(callback) {
  this.browser
    .init()
    .url('https://duckduckgo.com/').then(function() {
      callback();
    })
})

When('I search for WebdriverIO', function(callback) {
  this.browser
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage').then(function(){
      callback();
    })
})

Then('I should see the search results', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("WebdriverIO at DuckDuckGo");
        callback();
  }).catch(function(error){
    callback(error);
  })
})

Given('I go to bing',function(callback) {
  this.browser
  .init()
  .url('https://bing.com').then(function(){callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I search for google', function(callback){
  this.browser
  .setValue('.b_searchbox', 'google')
  .click('.b_searchboxSubmit').then(function(){
    callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see the search result for bing', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("google - Bing");
        callback();
  }).catch(function(error){
    callback(error);
  })
})


Given('I go to google',function(callback) {
  this.browser
  .init()
  .url('https://google.com').then(function(){callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I search for bing', function(callback){
  this.browser
  .setValue('#lst-ib', 'bing')
  .keys('Enter').then(function(){
    callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see the search result for google', function(callback) {
  this.browser
    .getTitle().then(function(result){
        result.should.equal("bing - Google Search");
        callback();
  }).catch(function(error){
    callback(error);
  })
})

Given('I go to Figure1 registration page',function(callback) {
  this.browser
  .init()
  .url('https://app.figure1.com/account/register').then(function()
  {callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I enter create account', function(callback){
  this.browser
  .waitForVisible('.register-page__username-input')
  .setValue('.register-page__username-input', this.randomUsers())
  .setValue('.register-page__email-input',this.randomUsers()+'kirtan_bhavsar@yahoo.com')
  .setValue('.register-page__password-input','Parents1')
  .setValue('.register-page__confirm-password-input','Parents1')
  .addValue('.register-page__specialties-list','Physicion')
  .waitForVisible('.register-page__specialties-other-list')
  .addValue('.register-page__specialties-other-list','Cardiology Resident')
  .click('.box')
  //.click('.register-page__submit-button')
    .then(function(){
    callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see the result for sign up error', function(callback) {
  this.browser
  .waitForVisible('.error-message-light')
  .getText('.error-message-light').then(function(result){
    result.should.equal("An account with that username already exists.");
    callback();
}).catch(function(error){
callback(error);
})
})

Given('I go to Figure1 registration page',function(callback) {
  this.browser
  .init()
  .url('https://app.figure1.com/account/register').then(function()
  {callback();
  }).catch(function(error){
    callback(error);
  })
})

When('I enter create account', function(callback){
  this.browser
  .waitForVisible('.register-page__username-input')
  .setValue('.register-page__username-input','kirtan')
  .setValue('.register-page__email-input','kirtan_bhavsar@yahoo.com')
  .setValue('.register-page__password-input','Parents1')
  .setValue('.register-page__confirm-password-input','Parents1')
  .addValue('.register-page__specialties-list','Physicion')
  .waitForVisible('.register-page__specialties-other-list')
  .addValue('.register-page__specialties-other-list','Cardiology Resident')
  .click('.box')
  .click('.register-page__submit-button')
    .then(function(){
    callback();
  }).catch(function(error){
    callback(error);
  })
})

Then('I should see the result for sign up error', function(callback) {
  this.browser
  .waitForVisible('.error-message-light')
  .getText('.error-message-light').then(function(result){
    result.should.equal("An account with that username already exists.");
    callback();
}).catch(function(error){
callback(error);
})
})
