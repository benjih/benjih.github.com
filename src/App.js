import React, { Component } from 'react'
import './App.css'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div>
        <Header>benjih</Header>
        <div id="social">
          <a href="http://www.twitter.com/_benjih">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a> <a href="http://www.github.com/benjih">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <div id="border"></div>
        <div id="content">
          <p>Formerly dropping anchors with <a href="//ankyra.io">Ankyra</a></p>
          <p>I've spent a lot of time previously working on <a href="//github.com/SpectoLabs/hoverfly">Hoverfly</a>, an open source service virtualization tool built in Golang.</p>
        </div>
      </div>
    )
  }
}

export default App
