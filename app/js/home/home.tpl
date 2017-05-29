<div class="main">
  <button ng-click="topFunction($event)" id="myBtn" title="Go to top">Top</button>
  <div id="home" class="top-header">
    <div class="topnav" id="myTopnav">
      <a du-smooth-scroll="top" offset="100" du-scrollspy><span><img src="app/imgs/logo.png" width="100" height="100"></span></a> 
      <a du-smooth-scroll="top" offset="100" du-scrollspy ng-click="mobileMenu($event)">HOME</a> 
      <a du-smooth-scroll="who-we-are" offset="100" du-scrollspy ng-click="mobileMenu($event)">ABOUT</a>
      <a du-smooth-scroll="why-finedu" offset="100" du-scrollspy ng-click="mobileMenu($event)">OUR VISION</a> 
      <a du-smooth-scroll="b-school" offset="100" du-scrollspy ng-click="mobileMenu($event)">OBJECTIVE</a>
      <a du-smooth-scroll="product" offset="100" du-scrollspy ng-click="mobileMenu($event)">PRODUCT</a>
      <a du-smooth-scroll="people-say" offset="100" du-scrollspy ng-click="mobileMenu($event)">SERVICES</a>
      <a du-smooth-scroll="contact" offset="100" du-scrollspy ng-click="mobileMenu($event)">CONTACT</a>
      <a href="javascript:void(0);" style="font-size:15px;" class="icon" ng-click="mobileMenu($event)">&#9776;</a> 
    </div>
  </div>
  <div class="mainSlider" id="top">
    <div class="gallery1 js-flickity home-banner" data-flickity='{"autoPlay":true}'>
      <div class="gallery-cell1">
        <img src="app/imgs/_banner.jpg" /> </div>
      <div class="gallery-cell1">
        <img src="app/imgs/_banner.jpg" class="bnr-img2" /> </div>
      <div class="gallery-cell1">
        <img src="app/imgs/_banner.jpg" /> </div>
    </div>
  </div>
  <!-- 
  <div class="top-img1">
    <img src="app/imgs/banner.jpg"> </div> -->
  <div id="who-we-are">
    <ul class="flex-container1">
      <li class="flex-item1">
        <div class="ind-img">
          <img src="app/imgs/149533016629983.png"> </div>
      </li>
      <li class="flex-item1">
        <div class="content">
          <h5 class="head">About Linkage</h5>
          <p class="para1">The mission of Ackotech (System Integrators) desing mantain is to help our clients with Information Technology services of outstanding quality, competence and objectivity, delivering the best solutions to fully satisfy client objectives in information technology,business processes and management. In all we do, builds, maintains, and secures computer networks and it’s what makes us the best in our industry. </p>
        </div>
      </li>
    </ul>
  </div>
  <div class="section2" id="why-finedu">
    <ul class="flex-container2">
      <li class="flex-item2">
        <div class="content2">
          <h5 class="head2"> Our Vision</h5>
          <p class="para2">Ackotech vision is to be a world-class IT Consulting company that helps our clients increase productivity and profitability through the use of the best technology available.We developing the are not even avilable in the gernal market.</p>
            <br>
            <br><h5 class="head2"><b>Our Team</b></h5>
            <p class="para2"> Ensuring they are on the cutting edge of industry parctices, and working within the culture that promotes excelent and job satification.</p>
            <br>
            <br><h5 class="head2"><b>Our Operation</b></h5>
             <p class="para2">Empling proactive, matrix-driven methods and practices desinged to server with transparance and integrety.</p>
        </div>
      </li>
      <li class="flex-item">
        <div class="why-img">
          <img src="app/imgs/image.jpg"> </div>
      </li>
    </ul>
  </div>
  <div id="b-school">
    <ul class="flex-container1">
      <li class="flex-item1">
        <div class="bImg">
          <img src="app/imgs/image2.jpg"> </div>
      </li>
      <li class="flex-item1">
        <div class="content">
          <h5 class="head">Objective and Integrity</h5>
          <p class="para1">Ackotech and its members exercise the highest degree of independent thinking in selecting the products, services and solutions we recommend to clients.
            <br>
            <br> The key of our success include a commitments to operational disciplie and excellence and attractig the best people in the business, alongside a healthy culture that promotes creative inovation, skillfull execution and retention of talent.
            <br><br>
            We have built a company that has the operational maturity, expertise, and resources to truely secure your network and make sure it operates at its best. And we deliver our services with integrity, accountablity, and an authentic desire to get to the heart of what your small to mid-size business needs. </p>
        </div>
      </li>
    </ul>
  </div>
</div>

<div class="section5" id="product">
  <!-- <div class="wordConatainer">
    <img src="app/imgs/icon2.png" width="100%">
  </div> -->
  <h3>Products</h3>
  <div class="row">
                    <div class="column">
                      <img src="app/imgs/server.png">
                      <h4>System</h4>
                    </div>
                    <div class="column">
                      <img src="app/imgs/cloud-computing.png">
                      <h4>Networking</h4>
                    </div>
                    <div class="column">
                      <img src="app/imgs/software.png">
                      <h4>Software</h4>
                    </div>
                    <div class="column">
                      <img src="app/imgs/database.png">
                      <h4>Security</h4>
                    </div>
                </div>
</div>
<div class="clear"></div>
<div class="section6" id="people-say">
<h2>Services</h2>
  <div class="row">
  <div class="column">
  <div class="dialog-demo-content" layout="row" layout-wrap layout-margin layout-align="start">
            <md-button class="md-primary md-raised courseButton box foo" ng-click="showAlert($event)"> Managed IT Services </md-button>
          </div></div>
  <div class="column"><div class="dialog-demo-content" layout="row" layout-wrap layout-margin layout-align="start">
            <md-button class="md-primary md-raised courseButton box foo" ng-click="showAlert2($event)"> Server & Destop Support </md-button>
          </div></div>
  <div class="column"><div class="dialog-demo-content" layout="row" layout-wrap layout-margin layout-align="start">
            <md-button class="md-primary md-raised courseButton box foo" ng-click="showAlert3($event)"> Remort IT Support & Management </md-button>
          </div></div>
  </div>
  <div class="row">
  <div class="column"><div class="dialog-demo-content" layout="row" layout-wrap layout-margin layout-align="start">
            <md-button class="md-primary md-raised courseButton box foo" ng-click="showAlert4($event)"> WIFI & Point to Point Solution </md-button>
          </div></div>
  <div class="column"><div class="dialog-demo-content" layout="row" layout-wrap layout-margin layout-align="start">
            <md-button class="md-primary md-raised courseButton box foo" ng-click="showAlert5($event)"> Data Backup & Disaster Recovery </md-button>
          </div></div>
  <div class="column"><div class="dialog-demo-content" layout="row" layout-wrap layout-margin layout-align="start">
            <md-button class="md-primary md-raised courseButton box foo" ng-click="showAlert6($event)"> Cloud Computing Secure Solution </md-button>
          </div></div>

</div>
  <!-- <div class="gallery-container">
    <div class="gallery js-flickity testimonial" data-flickity-options='{ "contain": true }'>
      <div class="gallery-cell"> <i class="fa fa-quote-left" aria-hidden="true"></i>
        <div class="gallery-cell-txt"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <div class="testimonialName">
            <h3>RASHI MALIK</h3>
            <p>CEO RELIENCE FINANCE</p>
          </div>
        </div>
      </div>
      <div class="gallery-cell"> <i class="fa fa-quote-left" aria-hidden="true"></i>
        <div class="gallery-cell-txt"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <div class="testimonialName">
            <h3>RASHI MALIK</h3>
            <p>CEO RELIENCE FINANCE</p>
          </div>
        </div>
      </div>
      <div class="gallery-cell"> <i class="fa fa-quote-left" aria-hidden="true"></i>
        <div class="gallery-cell-txt"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <div class="testimonialName">
            <h3>RASHI MALIK</h3>
            <p>CEO RELIENCE FINANCE</p>
          </div>
        </div>
      </div>
      <div class="gallery-cell"> <i class="fa fa-quote-left" aria-hidden="true"></i>
        <div class="gallery-cell-txt"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <div class="testimonialName">
            <h3>RASHI MALIK</h3>
            <p>CEO RELIENCE FINANCE</p>
          </div>
        </div>
      </div>
      <div class="gallery-cell"> <i class="fa fa-quote-left" aria-hidden="true"></i>
        <div class="gallery-cell-txt"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <div class="testimonialName">
            <h3>RASHI MALIK</h3>
            <p>CEO RELIENCE FINANCE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ol class="gallery-nav">
    <li id="li1">
      <a ng-click="getClick('li1')">
        <img src="app/imgs/person-icon.png" ng-class="{selectedImg : homectrl.selectedLi ==='li1'}" id="img1" width="40px" height="40px" class="img"> </a>
    </li>
    <li id="li2">
      <a ng-click="getClick('li2')">
        <img src="app/imgs/person-icon.png" ng-class="{selectedImg : homectrl.selectedLi ==='li2'}" id="img2" width="40px" height="40px" class="img"> </a>
    </li>
    <li id="li3">
      <a ng-click="getClick('li3')">
        <img src="app/imgs/person-icon.png" ng-class="{selectedImg : homectrl.selectedLi ==='li3'}" id="img3" width="40px" height="40px" class="img"> </a>
    </li>
    <li id="li4">
      <a ng-click="getClick('li4')">
        <img src="app/imgs/person-icon.png" ng-class="{selectedImg : homectrl.selectedLi ==='li4'}" id="img4" width="40px" height="40px" class="img"> </a>
    </li>
    <li id="li5">
      <a ng-click="getClick('li5')">
        <img src="app/imgs/person-icon.png" ng-class="{selectedImg : homectrl.selectedLi ==='li5'}" id="img5" width="40px" height="40px" class="img"> </a>
    </li>
  </ol> -->
  <!-- {{homectrl.flkty.selectedIndex}} -->
</div>
<div class="section7" id="contact">
  <form class="form-main" name="userForm" method="post" action="home" autocomplete=off>
    <h2>GIVE US A GOOD NEWS</h2>
    <div class="group">
      <input type="text" id="name" ng-model="user.name" name="name" class="input-field" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="label-name">Name</label>
    </div>
    <div class="group">
      <input type="email" ng-model="user.email" name="email" class="input-field" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="label-name">Email</label>
    </div>
    <div class="group">
      <input type="text" ng-model="user.subject" class="input-field" name="subject" id="subject" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="label-name">Subject</label>
    </div>
    <div class="group">
      <textarea ng-model="user.message" class="input-field messageHeight" name="message" required></textarea>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label class="label-name">Your Message</label>
    </div>
    <div class="bottomDiv">
      <div>
        <button class="field-button" type="submit" ng-click="submitForm()">Submit</button>
      </div>
    </div>
  </form>
  <div class="partner">
    <h2>OUR CLIENTS</h2>
    <img src="app/imgs/patners.jpg"> </div>
</div>
<div class="clear"></div>
<div class="footer">
  <div class="footerContent">
    <div class="footer1">
      <ul>
        <li>
          <h2>LinkAge IT Service Co.</h2> </li>
          <div class="footerLinks"> 
        <li><a du-smooth-scroll="who-we-are" offset="100" du-scrollspy ng-click="mobileMenu($event)">ABOUT</a></li><li>
        <a du-smooth-scroll="why-finedu" offset="100" du-scrollspy ng-click="mobileMenu($event)">OUR VISION</a> </li><li>
        <a du-smooth-scroll="b-school" offset="100" du-scrollspy ng-click="mobileMenu($event)">OBJECTIVE</a></li><li>
        <a du-smooth-scroll="product" offset="100" du-scrollspy ng-click="mobileMenu($event)">PRODUCT</a></li><li>
        <a du-smooth-scroll="people-say" offset="100" du-scrollspy ng-click="mobileMenu($event)">SERVICES</a></li><li>
        <a du-smooth-scroll="contact" offset="100" du-scrollspy ng-click="mobileMenu($event)">CONTACT</a></li>
        </div>
      </ul>
    </div>
    <div class="footer2">
      <ul>
        <li>
          <h2>OUR ADDRESS</h2>
        </li>
        <li class="topPad">
          <img src="app/imgs/location_icon.png"> # Inside Share'e Punjab Complex,
          <p>Opp Ind Est, LinkRoad Dholewal Ludhiana-141003 Punjab-INDIA</p>
        </li>
        <li class="topPad">
          <img src="app/imgs/contact_icon.png">+91-98 1173 5353 | 99 7124 5353</li>
          <li><img src="app/imgs/mail.png" width="20" height="20">info@linkagetech.com</li>
      </ul>
    </div>
    <div class="footer3">
      <ul>
        <li>STAY IN TOUCH</li>
        <li class="group">
          <form method="post" action="subscribe">
            <input type="text" class="input-field" name="subscribe" required>
            <span class="highlight"></span>
            <span class="bar"></span>
            <label class="label-name">Subscribe our newsletter</label>
            <button type="submit"></button>
          </form>
        </li>
        <li>
          <div class="socialContainer">
            <a href="https://www.facebook.com/">
              <div class="fbIcon"> </div>
            </a>
            <a href="https://www.twitter.com/">
              <div class="twitter"> </div>
            </a>
            <a href="https://www.youtube.com/">
              <div class="youTube"> </div>
            </a>
          </div>
        </li>
        <li>
          <h3 class="orange">Copyright © 2017 - FinEdu Consultancy</h3>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="mobileFooter">
  <div class="mobileFooterContainer">
    <ul>
      <li>
        <h2>Linkage IT Service Co.</h2> </li>
    </ul>
    <ul>
      <li>
        <h2>OUR ADDRESS</h2>
      </li>
      <li class="topPad">
        <img src="app/imgs/location_icon.png"> 2501/1,2nd Floor, Vidyanand Market,
        <p>Teliwara, Delhi- 110006</p>
      </li>
      <li class="topPad">
        <img src="app/imgs/contact_icon.png">+91-98 1173 5353 | 99 7124 5353</li>
    </ul>
    <ul>
      <li>
        <div class="socialContainer">
          <a href="https://www.facebook.com/">
            <div class="fbIcon"> </div>
          </a>
          <a href="https://www.twitter.com/">
            <div class="twitter"> </div>
          </a>
          <a href="https://www.youtube.com/">
            <div class="youTube"> </div>
          </a>
        </div>
      </li>
      <li>
        <h3>Copyright © 2017 - FinEdu Consultancy</h3>
      </li>
    </ul>
  </div>
</div>
