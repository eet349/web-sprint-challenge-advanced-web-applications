// import axios from "axios";
import React, { useEffect, useState } from 'react';
// import { axiosWithAuth } from '../helpers/axiosWithAuth';
import { fetchColors } from '../helpers/fetchColors';
import Bubbles from './Bubbles';
import ColorList from './ColorList';

// export const fetchColors = (callback) => {
// 	axiosWithAuth()
// 		.get('/colors')
// 		.then((res) => {
// 			// console.log('res.data: ', res.data);
// 			callback(res.data);
// 		})
// 		.catch((err) => {
// 			console.log('err: ', err);
// 		});
// };
const BubblePage = () => {
	const [colorList, setColorList] = useState([]);

	useEffect(() => {
		fetchColors(setColorList);
		// axiosWithAuth()
		// 	.get('/colors')
		// 	.then((res) => {
		// 		console.log('res.data: ', res.data);
		// 		setColorList(res.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log('err: ', err);
		// 	});
	}, []);

	return (
		<div className='container'>
			<ColorList colors={colorList} updateColors={setColorList} />
			<Bubbles colors={colorList} />
		</div>
	);
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
