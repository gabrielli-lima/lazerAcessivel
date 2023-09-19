import {  useRoutes } from 'react-router-dom'
import { PaginaPesquisa } from '../pages/PaginaPesquisa'
import { Home } from '../pages/Home'

export const RouterList = () => {
    const base = 'lazerAcessivel'
    return useRoutes([
        { path: `/${base}`, element: <Home/> },
        { path: `/${base}/pesquisar`, element: <PaginaPesquisa /> }
        // { path: '*', element: <NotFound /> },

    ])
}