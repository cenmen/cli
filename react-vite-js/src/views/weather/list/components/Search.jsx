import { Button, Form, Input } from 'antd';

const Search = props => {
	const { onSearch } = props;
	const onSubmit = values => {
		onSearch(values);
	};

	return (
		<Form layout='inline' onFinish={onSubmit}>
			<Form.Item label='城市名称' name='name'>
				<Input />
			</Form.Item>
			<Form.Item>
				<Button type='primary' htmlType='submit'>
					查询
				</Button>
			</Form.Item>
		</Form>
	);
};

export default Search;
