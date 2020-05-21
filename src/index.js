import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'
import ErrorBoundry from './components/ErrorBoundry'
import ScrollToTop from './components/ScrollToTop'
import CameraStoreService from './services/CameraStoreService'
import { CameraStoreServiceProvider } from './components/CameraStoreContext'

import store from './store/store'

const camerastoreService = new CameraStoreService()


ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<CameraStoreServiceProvider value={camerastoreService}>
				<Router>
					<ScrollToTop>
						<React.StrictMode>
							<App />
						</React.StrictMode>
					</ScrollToTop>
				</Router>
			</CameraStoreServiceProvider>
		</ErrorBoundry>
	</Provider >
	,
	document.getElementById('root')
)
