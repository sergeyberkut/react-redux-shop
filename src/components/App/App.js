import React from 'react'
import './App.scss'
import Header from '../Header'
import Footer from '../Footer'
import Content from '../Content'

function App() {
	return (
		<div className="wrapper">
			<Header />
			<Content />
			<Footer />
		</div>
	)
}

export default App