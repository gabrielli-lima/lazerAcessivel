import {  useRoutes } from 'react-router-dom'
import { PaginaPesquisa } from '../pages/PaginaPesquisa'
import { Home } from '../pages/Home'

export const RouterList = () => {
    return useRoutes([
        { path: '/', element: <Home/> },
        { path: '/pesquisar', element: <PaginaPesquisa /> }
        // { path: '*', element: <NotFound /> },

    ])
}