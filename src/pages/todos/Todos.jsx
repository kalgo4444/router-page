import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Todos = () => {
	AOS.init({
		duration: 300,
	});
	const [date, setDate] = useState(null);
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos")
			.then(res => setDate(res.data))
			.catch(err => setErr(err))
			.finally(() => setLoading(false));
	}, []);

	const obj = date?.slice(0, 28);

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
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
								<div className='animate-pulse'>
									<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
									<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
								</div>
							</>
						) : (
							obj?.map(item => (
								<li
									data-aos='fade-up'
									key={item.id}
									className={`border-2 border-border-color rounded-2xl p-3 min-h-[150px] relative box-shadow ${
										item.completed ? "bg-gray-400" : "bg-white"
									}`}
								>
									<h3 className='text-2xl font-semibold'>Todo</h3>
									<p className='text-lg'>{item.title}</p>
									<div class='inline-flex items-center absolute right-2 bottom-2'>
										<label class='flex items-center cursor-pointer relative' for='check-2'>
											<input
												type='checkbox'
												checked={item.completed}
												class='peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800'
												id='check-2'
											/>
											<span class='absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													class='h-3.5 w-3.5'
													viewBox='0 0 20 20'
													fill='currentColor'
													stroke='currentColor'
													stroke-width='1'
												>
													<path
														fill-rule='evenodd'
														d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
														clip-rule='evenodd'
													></path>
												</svg>
											</span>
										</label>
										<label class='cursor-pointer ml-2 text-slate-600 text-sm' for='check-2'>
											{item.completed ? "Done" : "Not done"}
										</label>
									</div>
								</li>
							))
						)}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Todos;
