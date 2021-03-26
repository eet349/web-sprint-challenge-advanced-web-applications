import { axiosWithAuth } from './axiosWithAuth';

export const fetchColors = (callback = console.log) => {
	axiosWithAuth()
		.get('/colors')
		.then((res) => {
			// console.log('res.data: ', res.data);
			callback(res.data);
		})
		.catch((err) => {
			console.log('err: ', err);
		});
};
