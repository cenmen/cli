import { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'antd';
import { getWeatherByCity } from '@/api/modules/weather';

const WeatherList = () => {
	const [dataSource, setDataSource] = useState([]);
	const getWeatherData = async () => {
		const { data } = await getWeatherByCity();
		const list = data.city.map(val => ({
			name: val[17],
			code: val[1],
			temperature: val[4]
		}));
		setDataSource(list);
	};

	const columns = [
		{
			title: '县名',
			dataIndex: 'name'
		},
		{
			title: '城市编码',
			dataIndex: 'code'
		},
		{
			title: '温度',
			dataIndex: 'temperature',
			render: val => `${val}°C`
		}
	];

	return (
		<>
			<div className="card-container">
				<Button onClick={getWeatherData}>查询</Button>
			</div>
			<div className="card-container">
				<Table dataSource={dataSource} columns={columns} rowKey="code" />
			</div>
		</>
	);
};

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps)(WeatherList);
