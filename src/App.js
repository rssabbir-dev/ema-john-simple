import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Main from './layout/Main';
import productAndCartLoaders from './loaders/productAndCartLoaders';
function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Main />,
			children: [
				{
					path: '/',
          element: <Shop />,
          loader: productAndCartLoaders,
        },
        {
          path: '/shop',
          element: <Shop />,
          loader:productAndCartLoaders,
        },
				{
					path: '/orders',
          element: <Orders />,
          loader: productAndCartLoaders,
        },
        {
          path: '/inventory',
          element:<Inventory/>
        },
        {
          path: '/about',
          element:<About/>
        },
        {
          path: '/login',
          element:<Login/>
        },
        {
          path: '/signup',
          element: <SignUp/>
        }
			],
		},
	]);
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;
