import React, { Component } from 'react'
import {IconStyle} from './assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import { renderRoutes } from 'react-router-config'
import routes from './routes/index.js'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle ></IconStyle>
          {renderRoutes(routes)}
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
