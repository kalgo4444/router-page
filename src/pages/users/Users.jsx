import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
	const [date, setDate] = useState(null);
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users", { params: { limit: 8 } })
			.then(res => setDate(res.data))
			.catch(err => setErr(err))
			.finally(() => setLoading(false));
	}, []);

	if (err) {
		return (
			<div className='container mx-auto px-5 min-h-[100vh] flex items-center justify-center text-red-500 text-9xl'>
				Error!
			</div>
		);
	}
	const img =
		"https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
	return (
		<section>
			<div className='container mx-auto px-5 min-h-[100vh]'>
				<ul className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{loading ? (
						<>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className='animate-pulse'>
								<div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600'></div>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
						</>
					) : (
						date?.map(item => (
							<li
								key={item.id}
								className='overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 box-shadow'
							>
								<img src={img} loading='lazy' className='object-cover w-full h-56' alt='card img' />
								<div className='py-5 text-center text-white'>
									<p className='block text-xl font-bold text-gray-800 dark:text-white'>
										{item.name}
									</p>
									<span className='text-sm text-gray-700 dark:text-gray-200'>
										{item.company.name}
									</span>
								</div>
							</li>
						))
					)}
				</ul>
			</div>
		</section>
	);
};

export default Users;
