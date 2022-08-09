import { useEffect, useState } from 'react';
import { Form, Input, Modal } from 'antd';

const defaultModalSource = {
	title: '新增分类'
};

const EditModal = props => {
	const { mode, visible, data = {}, updateEditModalConfig, onSubmit } = props;
	const [modalSource, setModalSource] = useState(defaultModalSource);
	const [form] = Form.useForm();

	const initAddMode = () => {
		setModalSource({ title: '新增分类' });
	};

	const initEditMode = () => {
		setModalSource({ title: '编辑分类' });
		form.setFieldsValue(data);
	};

	const submit = async () => {
		const values = await form.validateFields();
		onSubmit({ ...data, ...values });
	};

	useEffect(() => {
		if (mode === 'add') initAddMode();
		if (mode === 'edit') initEditMode();
	}, [visible]);

	return (
		<>
			<Modal
				title={modalSource.title}
				visible={visible}
				onOk={submit}
				onCancel={() => updateEditModalConfig({ data: null, visible: false })}
			>
				<Form form={form}>
					<Form.Item
						label='分类名称'
						name='name'
						rules={[
							{
								required: true,
								message: '请输入分类名称'
							}
						]}
					>
						<Input />
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default EditModal;
