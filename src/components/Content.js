import egg1 from "../images/egg.jpg";
import egg2 from "../images/egg-2.jpg";

const Content = () => {
	return (
		<>
			<div className='menu-card'>
				<img src={egg1} alt='' className='card-img' />
				<div className='card-text'>
					<h2 className='text-2xl mb-2'>egg muffins</h2>
					<p className='mb-2'>crispy, delicious and nutritious</p>
					<span>$16</span>
				</div>
			</div>
			<div className='menu-card'>
				<img src={egg2} alt='' className='card-img' />
				<div className='card-text'>
					<h2 className='text-2xl mb-2'>egg salad</h2>
					<p className='mb-2'>crispy, delicious and nutritious</p>
					<span>$18</span>
				</div>
			</div>
		</>
	);
};

export default Content;
