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
    var api_key = 'key-7a2322746b659a0a26d66f0c07e27db1';
    var domain = 'sandbox7102872c028b4e199dcaafbbac291c22.mailgun.org';
    var mailgun = require( 'mailgun-js' )( {
      apiKey: api_key,
      domain: domain
    } );
    var data = {
      from: 'Gundeep <postmaster@sandbox7102872c028b4e199dcaafbbac291c22.mailgun.org>',
      to: 'gundeeps2786@gmail.com',
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
  var api_key = 'key-23de459429573b0595598b70c8ac1424';
  var domain = 'sandbox8e7235f3784b4ac9a1b9088069eee570.mailgun.org';
  var mailgun = require( 'mailgun-js' )( {
    apiKey: api_key,
    domain: domain
  } );
  var data = {
    from: 'Vipul <postmaster@sandbox8e7235f3784b4ac9a1b9088069eee570.mailgun.org>',
    to: 'fineduconsultancy@gmail.com',
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