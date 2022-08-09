import { connect } from 'react-redux';
import { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { VIEW_WELCOME } from '@/constants/modules/route';
import { setTokenInfo } from '@/redux/modules/auth/action';
import { login } from '@/api/modules/login';

const LoginForm = props => {
	const navigate = useNavigate();
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);

	// 登录
	const onFinish = async loginForm => {
		try {
			setLoading(true);
			const tokenInfo = await login(loginForm);
			props.setTokenInfo(tokenInfo);
			message.success('登录成功！');
			navigate(VIEW_WELCOME);
		} finally {
			setLoading(false);
		}
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Form
			form={form}
			name='basic'
			labelCol={{ span: 5 }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size='large'
			autoComplete='off'
		>
			<Form.Item name='username' rules={[{ required: true, message: '请输入用户名' }]}>
				<Input placeholder='用户名：admin / user' prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name='password' rules={[{ required: true, message: '请输入密码' }]}>
				<Input.Password autoComplete='new-password' placeholder='密码：123456' prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className='login-btn'>
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					重置
				</Button>
				<Button type='primary' htmlType='submit' loading={loading} icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};

const mapDispatchToProps = { setTokenInfo };
export default connect(null, mapDispatchToProps)(LoginForm);
