import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav
			className='flex justify-between items-center h-16 bg-white text-black realtive shadow-sm font-mono'
			role='navigation'>
			<Link to='/' className='pl-8'>
				egg
			</Link>
			<div className='px-4 cursor-pointer md:hidden'>
				<svg
					className='w-6 h-6'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</div>
			<div className='pr-8 md:block hidden'>
				<Link className='p-4' to='/'>
					home
				</Link>
				<Link className='p-4' to='/menu'>
					menu
				</Link>
				<Link className='p-4' to='/about'>
					about
				</Link>
				<Link className='p-4' to='/contact'>
					contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
