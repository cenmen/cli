import { useEffect } from 'react';
import { Image, Descriptions, message } from 'antd';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHeroItemDetail } from '@/redux/modules/hero/action';

const DataDetail = props => {
	const { currentHeroItem, updateHeroItemDetail } = props;
	const { id } = useParams();

	useEffect(() => {
		const hide = message.loading('正在加载英雄详情...', 0);
		updateHeroItemDetail(id, hide);
	}, [id]);

	const { title, name, shortBio, allytips, enemytips } = currentHeroItem?.hero || {};
	const { mainImg } = currentHeroItem?.skins[0] || {};

	return (
		<div className='card-container'>
			{currentHeroItem?.hero && (
				<>
					<Descriptions title='英雄详情' bordered column={1} labelStyle={{ width: 120 }}>
						<Descriptions.Item label='英雄图片'>
							<Image width={500} src={mainImg} />
						</Descriptions.Item>
						<Descriptions.Item label='名称'>
							{title} - {name}
						</Descriptions.Item>
						<Descriptions.Item label='故事'>{shortBio}</Descriptions.Item>
						<Descriptions.Item label='攻略'>
							{allytips.map(val => (
								<div key={val}>{val}</div>
							))}
						</Descriptions.Item>
						<Descriptions.Item label='克制'>
							{enemytips.map(val => (
								<div key={val}>{val}</div>
							))}
						</Descriptions.Item>
					</Descriptions>
				</>
			)}
		</div>
	);
};

const mapStateToProps = state => state.hero;
const mapDispatchToProps = { updateHeroItemDetail };
export default connect(mapStateToProps, mapDispatchToProps)(DataDetail);
