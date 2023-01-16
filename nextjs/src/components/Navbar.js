import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { fetchLoginInfo } from '@/api';
import { setAuthInfo } from '@/store/modules/auth/action';

const Navbar = props => {
	const { title } = props;
	const dispatch = useDispatch();
	const { data, error } = useSWR('loginInfo', fetchLoginInfo, {
		onSuccess: data => {
			dispatch(setAuthInfo(data));
		},
	});

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<IconButton edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Image src='/next.svg' alt='Next.js Logo' width={70} height={20} priority />
					<Typography variant='h6' noWrap component='div' sx={{ marginLeft: 2, flexGrow: 1 }}>
						{title}
					</Typography>
					<Box sx={{ flexGrow: 0 }}>
						<IconButton sx={{ p: 0 }}>
							<Avatar alt='Remy Sharp' src={data?.avatar} />
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
