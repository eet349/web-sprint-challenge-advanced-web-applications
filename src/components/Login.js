import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Login = () => {
	// make a post request to retrieve a token from the api
	// when you have handled the token, navigate to the BubblePage route
	const history = useHistory();

	useEffect(() => {
		// make a post request to retrieve a token from the api
		// when you have handled the token, navigate to the BubblePage route
	});
	const LAMBDA_CREDENTIALS = {
		username: 'Lambda School',
		password: 'i<3Lambd4',
	};

	const initialError = '';
	const initialFormState = {
		username: '',
		password: '',
	};

	const [error, setError] = useState(initialError);
	const [formState, setFormState] = useState(initialFormState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post('http://localhost:5000/api/login', /*formState*/ LAMBDA_CREDENTIALS)
			.then((res) => {
				setError(initialError);
				localStorage.setItem('token', JSON.stringify(res.data.payload));
				history.push('/colors');
			})
			.catch((err) => {
				setError('Username or Password is incorrect.');
			});
	};

	return (
		<div>
			<h1>Welcome to the Bubble App!</h1>
			<div data-testid='loginForm' className='login-form'>
				<form onSubmit={handleSubmit}>
					<label htmlFor='username'>username</label>
					<input
						name='username'
						type='text'
						value={formState.username}
						onChange={handleChange}
						data-testid='username'
					/>
					<label htmlFor='username'>password</label>
					<input
						name='password'
						type='password'
						value={formState.password}
						onChange={handleChange}
						data-testid='password'
					/>
					<button type='submit'>login</button>
				</form>
			</div>

			<p data-testid='errorMessage' className='error'>
				{error}
			</p>
		</div>
	);
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
