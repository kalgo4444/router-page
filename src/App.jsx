import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Posts from "./pages/posts/Posts";
import Comments from "./pages/comments/Comments";
import Photos from "./pages/photos/Photos";
import Todos from "./pages/todos/Todos";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index={true} element={<Posts />} />
						<Route path='/comments' element={<Comments />} />
						<Route path='/photos' element={<Photos />} />
						<Route path='/todos' element={<Todos />} />
						<Route path='/users' element={<Users />} />
					</Route>
					<Route path='*' element={<NotFound />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
