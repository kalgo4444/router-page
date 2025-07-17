import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Photos = () => {
	AOS.init({
		duration: 300,
	});
	const [date, setDate] = useState(null);
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/photos")
			.then(res => setDate(res.data))
			.catch(err => setErr(err))
			.finally(() => setLoading(false));
	}, []);

	const obj = date?.slice(0, 16);

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
							</>
						) : (
							obj?.map(item => (
								<li
									data-aos='fade-up'
									key={item.id}
									className='border border-border-color rounded-2xl box-shadow'
								>
									<img src={item.thumbnailUrl} className='w-full h-64' alt='Card image' />
									<h3 className='mt-2 p-2 text-2xl font-semibold'>Image</h3>
									<p className='p-2 text-lg'>{item.title}</p>
								</li>
							))
						)}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Photos;
