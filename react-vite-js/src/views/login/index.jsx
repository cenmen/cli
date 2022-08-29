import LoginForm from './components/LoginForm';

const Login = () => {
	return (
		<div className='h-screen relative p-5 overflow-hidden'>
			<div className='h-full w-full shadow-lg p-10 bg-no-repeat bg-login bg-80% bg-center'>
				<div className='absolute w-96 bottom-60 right-40 bg-white rounded-xl p-10  shadow-lg'>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
