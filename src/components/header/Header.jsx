import "./header.css";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

const Header = () => {
	return (
		<header className='h-20 w-full sticky top-0 left-0 bg-white shadow dark:bg-gray-800'>
			<nav className='container mx-auto px-5 h-full flex items-center justify-center text-gray-600 capitalize dark:text-gray-300'>
				<>
					<ul className='flex items-center gap-10'>
						<li>
							<NavLink className={`text-lg font-semibold navbar__link`} to={"/"}>
								Posts
							</NavLink>
						</li>
						<li>
							<NavLink className={`text-lg font-semibold navbar__link`} to={"/comments"}>
								Comments
							</NavLink>
						</li>
						<li>
							<NavLink className={`text-lg font-semibold navbar__link`} to={"/photos"}>
								Photos
							</NavLink>
						</li>
						<li>
							<NavLink className={`text-lg font-semibold navbar__link`} to={"/todos"}>
								Todos
							</NavLink>
						</li>
						<li>
							<NavLink className={`text-lg font-semibold navbar__link`} to={"/users"}>
								Users
							</NavLink>
						</li>
					</ul>
				</>
				<>
					<Button text={"Log in"} n={"/login"} />
				</>
			</nav>
		</header>
	);
};

export default Header;
