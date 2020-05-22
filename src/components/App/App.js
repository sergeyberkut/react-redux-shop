import React from 'react'
import './App.scss'
import Header from '../Header'
import Footer from '../Footer'
import Content from '../Content'
import Modal from '../Modal'

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Content />
			<Footer />
			<Modal />
		</div>
	)
}

export default App