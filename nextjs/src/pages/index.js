import Head from 'next/head';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchStackData } from '@/api';
import { wrapper } from '@/store';
import { setCount, setCountByAsync } from '@/store/modules/count/action';
import Navbar from '@/components/Navbar';
import styles from './index.module.scss';

const Home = props => {
	const { data } = props;
	const { count } = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<div className={styles.container}>
					<Navbar title='Home' />
					<Button variant='contained' sx={{ marginTop: 2 }} onClick={() => dispatch(setCountByAsync(count.count + 2))}>
						count: {count.count}
					</Button>
					<div className={styles['mg-top']}>
						<TableContainer component={Paper}>
							<Table sx={{ minWidth: 650 }} aria-label='英雄联盟装备表格'>
								<TableHead>
									<TableRow>
										<TableCell>装备名称</TableCell>
										<TableCell align='right'>描述</TableCell>
										<TableCell align='right'>价格</TableCell>
										<TableCell align='right'>图片</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data.map(row => (
										<TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
											<TableCell component='th' scope='row'>
												{row.name}
											</TableCell>
											<TableCell align='right'>{row.plaintext}</TableCell>
											<TableCell align='right'>{row.sell}</TableCell>
											<TableCell align='right'>
												<Image src={row.iconPath} alt={row.name} width={20} height={20} />
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
			</main>
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(store => async () => {
	store.dispatch(setCount(3));
	const data = await fetchStackData();
	return { props: { data: data.items.slice(0, 10) } };
});

export default Home;