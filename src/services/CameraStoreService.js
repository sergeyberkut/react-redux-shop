import { catalog, catalogHome, catalogSections } from './catalog'

let id = 0
catalogSections.forEach(item => {
	item.id = ++id
	if (!item.img) {
		item.img = 'https://targoo.com.ua/oc-content/uploads/2/242.jpg.pagespeed.ce.wnlXILlvkq.jpg'
	}
})

export default class CameraStoreService {

	getBasketItems = () => JSON.parse(localStorage.getItem('basket')) || []

	getCatalogHome = () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(catalogHome)
			}, 1000)
		})
	}

	getCatalogMenu = () => catalog

	getGoodByID = id => catalogSections.find(good => good.id === id)

	getGoodList = category => catalogSections.filter(good => good.categoryName === category)

	getLinks = () => catalog.map(({ link }) => link)

	getTitleByLink = link => catalog.find(item => item.link === link).label

}