import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Posts = () => {
	AOS.init({
		duration: 300,
	});
	const [date, setDate] = useState(null);
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then(res => setDate(res.data))
			.catch(err => setErr(err))
			.finally(() => setLoading(false));
	}, []);

	const obj = date?.slice(0, 30);

	if (err) {
		return (
			<div className='container mx-auto px-5 min-h-[100vh] flex items-center justify-center text-red-500 text-9xl'>
				Error!
			</div>
		);
	}
	return (
		<>
			<section>
				<div className='container mx-auto px-5 min-h-[100vh]'>
					<ul className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
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
							obj?.map(item => (
								<li
									data-aos='fade-up'
									key={item.id}
									className='bg-white text-black border-2 border-border-color p-3 rounded-2xl box-shadow'
								>
									<h3 className='text-3xl font-semibold'>Post</h3>
									<p className='text-lg font-bold mt-3'>Title: {item.title}</p>
									<p className='text-lg mt-1'>{item.body}</p>
								</li>
							))
						)}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Posts;
