import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'

const HomeRoutes = () => {
  return (
    <div>
        <Header2 />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default HomeRoutes