//import { createBrowserRouter } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App.js'
import RegisterPage from '../pages/RegisterPage.js'
import CheckEmailPage from '../pages/CheckEmailPage.js'
import CheckPasswordPage from '../pages/CheckPasswordPage.js'
import AuthLayouts from '../layout'
import Home from '../pages/Home.js'
import MessagePage from '../components/MessagePage.js'

const router = createBrowserRouter([
{
    path: "/",
    element: <App/>,
    children: [
        {
            path: 'register',
            element: <AuthLayouts><RegisterPage/></AuthLayouts>
        },
        {
            path: 'email',
            element: <AuthLayouts><CheckEmailPage/></AuthLayouts>
        },
        {
            path: 'password',
            element: <AuthLayouts><CheckPasswordPage/></AuthLayouts>
        },
        {
            path: "",
            element: <Home/>,
            children: [
                {
                    path: ':userId',
                    element: <MessagePage/>
                }
            ]
        }
    ]
}
])

export default router