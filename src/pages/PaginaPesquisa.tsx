import FiltroEsquerda from './FiltroEsquerda'


export const PaginaPesquisa = () => {
    return (
        <div className='absolute inset-0 scroll-smooth w-full flex flex-row '>
            <FiltroEsquerda />
        </div>
    )
}