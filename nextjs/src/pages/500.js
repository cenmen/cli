import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import Container from '@mui/material/Container';

export default function Custom500() {
	return (
		<Grow in={true}>
			<Container maxWidth='xl'>
				<Paper elevation={3} sx={{ padding: 2 }}>
					<Stack alignItems='center' spacing={2}>
						<Image src='/500.svg' alt='500' width={880} height={380} priority />
						<h2>500</h2>
						<h3>遇到意外错误~</h3>
					</Stack>
				</Paper>
			</Container>
		</Grow>
	);
}
