import { useState, useEffect } from 'react';
import { Space, Button, Table, Popconfirm, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { cleanUpParams } from '@/utils';
import { getWeatherByCity } from '@/api/modules/weather';
import Search from './components/Search';
import EditModal from './components/EditModal';

const List = () => {
	const defaultPageData = { page: 1, size: 10 };
	const defaultEditModal = {
		visible: false,
		mode: 'add',
		data: null
	};
	const [dataSource, setDataSource] = useState({});
	const [editModal, setEditModal] = useState(defaultEditModal);
	const [searchFormData, setSearchFormData] = useState({});
	const [currentPageData, setCurrentPageData] = useState(defaultPageData);

	const onChangePage = async options => {
		const { current: page, pageSize: size } = options;
		const params = { ...searchFormData, page, size };
		const data = await getWeatherByCity(params);
		setDataSource(data);
		setCurrentPageData({ page, size });
	};

	const onSearch = async values => {
		const resetPageData = { page: 1, size: currentPageData.size };
		const params = cleanUpParams(values);
		const data = await getWeatherByCity({ ...params, ...resetPageData });
		setDataSource(data);
		setSearchFormData(values);
		setCurrentPageData(resetPageData);
	};

	const deleteItem = async id => {
		// const { success, message: text } = await deleteCatalogItem(id);
		// success ? message.success('删除成功') : message.error(text);
		// reload();
	};

	const createItem = async values => {
		// const params = pick(values, ['name']);
		// const { success, message: text } = await createCatalogItem(params);
		// success ? message.success('创建成功') : message.error(text);
	};

	const updateItem = async values => {
		// const params = pick(values, ['name']);
		// const { success, message: text } = await updateCatalogItem(values.id, params);
		// success ? message.success('更新成功') : message.error(text);
	};

	const onEditModalSubmit = async values => {
		const { mode } = editModal;
		if (mode === 'add') await createItem(values);
		if (mode === 'edit') await updateItem(values);
		updateEditModalConfig({ data: null, visible: false });
		reload();
	};

	const updateEditModalConfig = async params => {
		setEditModal({ ...editModal, ...params });
	};

	const reload = async () => {
		const params = { ...searchFormData, ...currentPageData };
		const data = await getWeatherByCity(params);
		setDataSource(data);
	};

	useEffect(() => {
		reload();
	}, []);

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
		},
		{
			title: '操作',
			dataIndex: 'id',
			render: (val, record) => (
				<Space size='large'>
					<a type='text' onClick={() => updateEditModalConfig({ mode: 'edit', data: record, visible: true })}>
						编辑
					</a>
					<Popconfirm title='确定删除?' onConfirm={() => deleteItem(val)}>
						<a type='text' style={{ color: 'red' }}>
							删除
						</a>
					</Popconfirm>
				</Space>
			)
		}
	];

	const { list = [], count: total } = dataSource;
	return (
		<div className='card-container'>
			<Search onSearch={onSearch} />
			<Space className='gap-top'>
				<Button
					type='primary'
					icon={<PlusOutlined />}
					onClick={() => updateEditModalConfig({ mode: 'add', data: null, visible: true })}
				>
					新建
				</Button>
			</Space>
			<div className='gap-top'>
				<Table
					rowKey='code'
					dataSource={list}
					columns={columns}
					pagination={{
						total,
						current: currentPageData.page,
						pageSize: currentPageData.size,
						showQuickJumper: true,
						showSizeChanger: true,
						showTotal: total => `共有 ${total} 条`
					}}
					onChange={onChangePage}
				/>
			</div>
			<EditModal {...editModal} updateEditModalConfig={updateEditModalConfig} onSubmit={onEditModalSubmit} />
		</div>
	);
};

export default List;
