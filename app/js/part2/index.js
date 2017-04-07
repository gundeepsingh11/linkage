// external js: flickity.pkgd.js

var galleryContainers = document.querySelectorAll('.gallery-container');

for ( var i=0; i < galleryContainers.length; i++ ) {
  initGalleryContainer( galleryContainers[i] );
}

function initGalleryContainer( container ) {
  // init flickity
  var galleryElem = container.querySelector('.gallery');
  var flkty = new Flickity( galleryElem );
  // hook up navigation
  var nav = container.querySelector('.gallery-nav');
  // get array of items
  var items = Array.prototype.slice.call( nav.children );
  nav.addEventListener( 'click', function( event ) {
    // only link clicks
    if ( !matchesSelector( event.target, 'a' ) ) {
      return; 
    }
    event.preventDefault();
    var item = event.target.parentNode;
    var index =  items.indexOf( item );
    flkty.select( index );
  });
}