import React, { Component } from 'react'
import {IconStyle} from './assets/iconfont/iconfont'
import { GlobalStyle } from './style'
import { renderRoutes } from 'react-router-config'
import routes from './routes/index.js'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import { Data } from './page/Singers/data';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle ></IconStyle>
          <Data>
          {renderRoutes(routes)}
          </Data>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
