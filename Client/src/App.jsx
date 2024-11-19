import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/Footer/footer'
import Home from './Pages/Home/home'
import About from './Pages/About/about'
import Shop from './Pages/Shop/shop'
import Blog from './Pages/Blog/blog'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/login'
import SportsNutrition from './Pages/SportsNutrition/SportsNutrition'
import Brands from './Pages/Brands/brands'
import Goals from './Pages/Goals/goals'   

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const LoginLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/sports-nutrition",
        element: <SportsNutrition />
      },
      {
        path: "/brands",
        element: <Brands />
      },
      {
        path: "/goals",
        element: <Goals />
      }
    ]
  },
  {
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
