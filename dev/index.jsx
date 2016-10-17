import React from "react";
import ReactDOM from "react-dom";
import { SocialIcon } from 'react-social-icons';


var VideoEmbed = React.createClass({
  iframe: function () {
      return {
          __html: this.props.iframe
        }
    },
    
    render: function() {
        return <div>
          <div className="video-container" dangerouslySetInnerHTML={ this.iframe() } />
        </div>;
    }
});

var iframe = '<iframe src="https://www.ustream.tv/embed/22759241?html5ui&autoplay=true" style="border: 0 none transparent; position:absolute; top:0; left: 0"  webkitallowfullscreen allowfullscreen frameborder="no" width="100%" height="100%"></iframe>'; 

var DonateButton = React.createClass({
  render: function() {
    return (
      <div className="button-container">
        <a href="https://app.etapestry.com/onlineforms/HandsAcrosstheWater/donate.html" target="_blank"><button className="donate-btn">DONATE</button></a>
      </div>
    )
  }
});

var Social = React.createClass({
  render: function() {
    return (
      <div className="social-links">
        <SocialIcon color="white" url="https://www.facebook.com/SabreToothedPortillo" />
        <SocialIcon color="white" url="https://soundcloud.com/perrymontblanc" />
        <SocialIcon color="white" url="https://twitter.com/ConcordDawnNZ" />
      </div>
    )
  }  
});

var HandsBanner = React.createClass({
  render: function() {
    return (
      <div className="hands-banner">
        <a href="http://handsacrossthewater.org.au/" target="_blank"><img src={'img/hatw.png'}/></a>
      </div>
    )
  }
});

var PresentedBy = React.createClass({
  render: function() {
    return (
      <div className="flex-header">
        <div className="presented"> 
          <img className="rubix-logo" src={'img/rubix-logo.png'}/>
          <img className="dope-logo" src={'img/free-dope-03.png'}/>
          <img className="clink-logo" src={'img/clink-logo.png'}/>
        </div>
        <Social/>
      </div>  
    )
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer">
         <h3>SPECIAL THANKS TO</h3>
         <ul>
          <li><img className="rubix-logo" src={'img/rubix-logo.png'}/></li>
          <li><img className="dope-logo" src={'img/free-dope-03.png'}/></li>
          <li><img className="clink-logo" src={'img/clink-logo.png'}/></li>
          <li><img className="rubix-logo" src={'img/rubix-logo.png'}/></li>
         </ul>
      </div>
    )
  }
})

var Home = React.createClass({
  render: function() {
      return (
        <div>
          <HandsBanner/>
          <VideoEmbed iframe={iframe} /> 
          <DonateButton/>             
        </div>
      );
    }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header">
          <PresentedBy/>
        </div>
        <div className="content">
          <Home/>
        </div>
        <Footer/>
      </div>
    )
  }
});


ReactDOM.render(
  <div>
    <App/>
  </div>,
  document.querySelector("#container")
);  


