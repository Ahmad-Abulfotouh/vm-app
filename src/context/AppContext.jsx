import {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const AppContext = createContext()

export const AppProvider = ({children}) => {

	const initialState = {
		products: [],
		orderList: [],
		totalOrderPrice: 0,
		loading: false
	}

	initialState.products = [
		{
			id: 1,
			title: 'coca cola',
			imgUrl: 'imgs/coca.jpg',
			price: 5.5,
			discount: 0
		},
		{
			id: 2,
			title: 'coca cola zero',
			imgUrl: 'imgs/coca-zero.jpeg',
			price: 5.5,
			discount: 0
		},
		{
			id: 3,
			title: 'sprite',
			imgUrl: 'imgs/sprite.jpg',
			price: 5.5,
			discount: 0
		}
	]

	// hi
	function hi(text) {
		console.log('hi from ' + text)
	}

	// Set Loading
	const setLoading = () => dispatch({type: 'SET_LOADING'})

	const [state, dispatch] = useReducer(AppReducer, initialState)

	return <AppContext.Provider value={{
		...state,
		dispatch,
		hi
	}}> {children} </AppContext.Provider>
}

export default AppContext