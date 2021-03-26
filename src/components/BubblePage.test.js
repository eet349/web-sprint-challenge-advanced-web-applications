import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';
import { fetchColors as mockFetchColors } from '../helpers/fetchColors';
jest.mock('../helpers/fetchColors');
// import axios from 'axios';
// import userEvent from '@testing-library/user-event';
// import Login from './Login';

test('Renders BubblePage without errors', () => {
	render(<BubblePage />);
});

test('Fetches data and renders the bubbles on mounting', async () => {
	console.log('mockAxios', mockFetchColors);
	mockFetchColors.mockResolvedValueOnce({
		data: [
			{
				id: 1,
				color: 'aqua',
				code: { hex: '#00ffff' },
			},
			{ id: 2, color: 'lilac', code: { hex: '#9a99dd' } },
			{ id: 3, color: 'blue', code: { hex: '#6093ca' } },
		],
	});
	const { queryByTestId } = render(<BubblePage />);
	await waitFor(() => {
		const colors = queryByTestId('color');
		console.log('colors', colors);
	});
});

// await waitFor(() => {
// 	const button = screen.queryAllByRole('button');
// 	const input = screen.queryAllByRole('div');
// 	const header = screen.queryByText(/logout/i);
// console.log('colors: ', colors);
// 	console.log('button: ', button);
// 	console.log('input: ', input);
// 	console.log('header: ', header);
// });

// userEvent.click(login);
// await waitFor(() => {
// console.log('bubbles: ', screen.queryByTestId('color'));
// const bubble = screen.queryByTestId('color');
// expect(bubbles).toBeInTheDocument();
// });

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
