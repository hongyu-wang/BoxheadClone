import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

render( <AppContainer><App/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <AppContainer>
		<MuiThemeProvider>
        	<App/>
        </MuiThemeProvider>
        
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
