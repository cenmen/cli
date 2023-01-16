import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import Container from '@mui/material/Container';

export default function Custom404() {
	return (
		<Grow in={true}>
			<Container maxWidth='xl'>
				<Paper elevation={3} sx={{ padding: 2 }}>
					<Stack alignItems='center' spacing={2}>
						<Image src='/404.svg' alt='404' width={880} height={380} priority />
						<h2>404</h2>
						<h3>找不到页面~</h3>
					</Stack>
				</Paper>
			</Container>
		</Grow>
	);
}
