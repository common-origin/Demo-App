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
      <div className="button-container col">
        <a href="https://app.etapestry.com/onlineforms/HandsAcrosstheWater/donate.html" target="_blank"><button className="donate-btn">CLICK HERE TO DONATE</button></a>
      </div>
    )
  }
});

var Social = React.createClass({
  render: function() {
    return (
      <div className="social-links col">
        <h5>FOLLOW US ON</h5>
        <SocialIcon url="https://www.facebook.com/SabreToothedPortillo" />
        <SocialIcon url="https://soundcloud.com/perrymontblanc" />
        <SocialIcon url="https://twitter.com/ConcordDawnNZ" />
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
      <div className="presented col">
        <h5>PRESENTED BY</h5>
        <img src={'img/rubix-logo.png'}/>
      </div>
    )
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer flex-grid-thirds">
        <Social/>
        <DonateButton/> 
        <PresentedBy/>
      </div>
    )
  }
})

var Home = React.createClass({
  render: function() {
      return (
        <div> 
          <VideoEmbed iframe={iframe} /> 
          <HandsBanner/>
          <Footer/>            
        </div>
      );
    }
});

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="header">
          <h1>MITCH INCOG B2B Mr SECRET</h1>
        </div>
        <div className="content">
          <Home/>
        </div>
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


