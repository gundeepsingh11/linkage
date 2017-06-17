var express = require( 'express' )
var path = require( 'path' )
var bodyParser = require( 'body-parser' );
var app = express();
var port = process.env.PORT || 8000
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );
app.use( express.static( __dirname + '/' ) );
//for contactus form
app.post( "/home", function( req, res ) {
    var api_key = 'key-7e050851449a02157e0d455f28cb5c7f';
    var domain = 'sandboxee254724beb74528827c469a85627681.mailgun.org';
    var mailgun = require( 'mailgun-js' )( {
      apiKey: api_key,
      domain: domain
    } );
    var data = {
      from: 'Raju Thakur <postmaster@sandboxee254724beb74528827c469a85627681.mailgun.org>',
      to: 'linkageldh@gmail.com',
      subject: req.body.name,
      html: '<b>Client Email Address: </b>' + req.body.email + '<br><b>Subject</b><br>' + req.body.subject +
        '<br><b>Message</b><br>' + req.body.message
    };
    mailgun.messages().send( data, function( error, body ) {
      console.log( body );
      //var element = document.getElementById("mailSent"); element.innerHTML = "New text!";
      if ( !error ) {
         res.sendFile( path.join( __dirname, 'index.html' ) );
         // alert('hello');
       }
      // res.send( contact.tpl ); 
      else res.send( "Mail not Send" );
    } );
  } )
  //for subscribe form
app.post( "/subscribe", function( req, res ) {
  var api_key = 'key-7e050851449a02157e0d455f28cb5c7f';
  var domain = 'sandboxee254724beb74528827c469a85627681.mailgun.org';
  var mailgun = require( 'mailgun-js' )( {
    apiKey: api_key,
    domain: domain
  } );
  var data = {
    from: 'Raju Thakur <postmaster@sandboxee254724beb74528827c469a85627681.mailgun.org>',
    to: 'linkageldh@gmail.com',
    subject: "Subscriber's E-Mail Address",
    html: '<b>Subscriber Email Address: </b>' + req.body.subscribe
  };
  mailgun.messages().send( data, function( error, body ) {
    console.log( body );
    if ( !error ) res.send( "Mail Send" );
    else res.send( "Mail not Send" );
  } );
} )
app.get( '/*', function( req, res ) {
  res.sendFile( path.join( __dirname, 'index.html' ) );
} );
// app.listen( 9099, function() {
//   console.log( "server listening on 9099" )
// } );
app.listen(port, function() {
    console.log("App is running on port " + port);
});