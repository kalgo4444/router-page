import axios from "axios";
import { useEffect, useState } from "react";

const Todos = () => {
	const [date, setDate] = useState(null);
	const [err, setErr] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/todos", { params: { limit: 8 } })
			.then(res => setDate(res.data))
			.catch(err => setErr(err))
			.finally(() => setLoading(false));
	}, []);
	return (
		<section>
			<div className='container mx-auto px-5 min-h-[100vh] border'>
				<ul className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
					{loading ? (
						<>
							<div className='animate-pulse'>
								<h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></h1>
								<p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700'></p>
							</div>
						</>
					) : (
						date?.map(item => (
							<li
								key={item.id}
								className='border-2 border-border-color rounded-2xl p-3 min-h-[150px] relative'
							>
								<h3 className='text-2xl font-semibold'>Todo</h3>
								<p className='text-lg'>{item.title}</p>
								<p
									className={`${
										item.completed ? "text-green-500" : "text-red-500"
									} text-right absolute right-2 bottom-2 text-lg font-bold`}
								>{`${item.completed ? "Done" : "Not Done"}`}</p>
							</li>
						))
					)}
				</ul>
			</div>
		</section>
	);
};

export default Todos;
