import { catalog, catalogHome, catalogSections } from './catalog'


catalogSections.forEach((item, index) => {
	item.id = index
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
			}, 0)
		})
	}

	getCatalogMenu = () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(catalog)
			}, 1000)
		})
	}

	getGoodByID = id => catalogSections.find(good => good.id === id)

	getGoodList = category => {
		return new Promise(resolve => {
			setTimeout(() => {
				if (category === 'catalog') {
					resolve(catalogSections)
				}
				const data = catalogSections.filter(good => good.categoryName === category)
				resolve(data)
			}, 700)
		})
	}

	getLinks = () => catalog.map(({ link }) => link)

	getTitleByLink = link => catalog.find(item => item.link === link).label

}