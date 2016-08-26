// Our API for demos only
import {fakeDataBase} from './db';
import {fakeDemoRedisCache} from './cache';
import * as express from 'express';
import * as needle from 'needle';
var request = require("request");

export function sendContactEmail(req, res) {
  const DOMAIN = 'sandbox587d48a9dc7c4ef696a3a149c2d9747d.mailgun.org';
  let KEY = 'key-998712bea03a50212c650813b823352f';
  let options = req.body;

  let recipient = (process.env.NODE_ENV !== 'production') ?
    'qiyen77@gmail.com' :
    ['proair@proairmarine.com','shiamary@proairmarine.com'];

  needle.post(`https://api:${KEY}@api.mailgun.net/v3/${DOMAIN}/messages`, {
    from: options.email,
    to: recipient,
    subject: `Email from ${options.name} titled: ${options.title}`,
    text: options.message,
  }, (err, response) => (err) ?
    res.status(200).json({ sent: false, data: err }) :
    res.status(200).json({ sent: true, data: response.body }));
}

export function gRecaptchaPost(req: express.Request, res: express.Response) {
  // g-recaptcha-response is the key that browser will generate upon form submit.
  // if its blank or null means user has not selected the captcha, so return the error.
  if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
    return res.status(406).json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
  }
  // Put your secret key here.
  var secretKey = "6LfZuiYTAAAAAIe3D4NVVP9BSFWXOK7J5JYlZKRE";
  // req.connection.remoteAddress will provide IP address of connected user.
  var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  // Hitting GET request to the URL, Google will respond with success or error scenario.
  request(verificationUrl,function(error,response,body) {
    body = JSON.parse(body);
    // Success will be true or false depending upon captcha validation.
    if(body.success !== undefined && !body.success) {
      return res.status(403).json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
    }
    res.status(200).json({"responseCode" : 0,"responseDesc" : "Success"});
  });
}
