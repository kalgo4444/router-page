import axios from "axios";
import React, { useEffect, useState } from "react";

const Comments = () => {
	const [date, setDate] = useState(null);
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/comments")
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
	return (
		<section>
			<div className='container mx-auto px-5 min-h-[100vh]'>
				<ul className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
					{loading ? (
						<>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
							<div className=' animate-pulse p-9'>
								<h3 className='h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600'></h3>
								<p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								<p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
						</>
					) : (
						date?.map(item => (
							<li key={item.id} className='border-2 border-border-color p-3 rounded-2xl box-shadow'>
								<h3 className='text-2xl font-semibold'>Name: {item.name}</h3>
								<p className='text-lg'>{item.body}</p>
								<p className='mt-3 text-gray-900'>Email: {item.email}</p>
							</li>
						))
					)}
				</ul>
			</div>
		</section>
	);
};

export default Comments;
