
import filter from '../assets/filter.svg'

export const PaginaPesquisa = () => {
    return (
        <div className='absolute inset-0 scroll-smooth flex md:flex-row flex-col'>

            <div className="bg-[#FDF3ED] md:w-2/5 h-full shadow-2xl z-10 shadow-[#f15a386b]">
                <div className='mt-8 ml-10'>
                    <header className='flex flex-row gap-2'>
                        <h2 className='font-bold text-2xl bg-[#3E7A68] text-white rounded-xl px-2 tracking-wide'>Filtro</h2>
                        <img src={filter} alt="" />
                    </header>

                    <div className='flex flex-col items-start pl-5 pt-5 text-xl accent-[#3E7A68]'>
                        <h3 className='font-semibold'>O local precisa ter:</h3>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" /> Rampas
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" /> Banheiro com acessibilidade
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" /> Piso tátil
                        </label>
                        <br />

                        <h3 className='font-semibold'>Precisa de acompanhante:</h3>
                        <div className='flex flex-row gap-5'>
                            <label htmlFor="">
                                <input type="radio" name="" id="" /> Sim
                            </label>
                            <label htmlFor="">
                                <input type="radio" name="" id="" /> Não
                            </label>
                        </div>
                        <br />

                        <h3 className='font-semibold'>Tipo de atividade:</h3>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" /> Parque
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" /> Museu
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" /> Atividades cuturais/artisticas
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" /> Jogos
                        </label>

                        <div className='my-8'>
                            <h2 className='font-bold text-2xl text-[#3E7A68]'>Procurar lugares em:</h2>
                            <label htmlFor="">
                               <select name="" id="" className='w-full text-lg p-1 bg-gray-200 rounded-md mt-2'>
                                    <option value="">Hortolândia, SP</option>aa
                               </select>
                            </label>
                        </div>
                    </div>

                </div>
            </div>

            <div className="md:w-3/5 h-full z-0">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.9661384880674!2d-47.216925172268375!3d-22.87770923229031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8bb90bb524d73%3A0x9bdd9d34379d2438!2sParque%20Lago%20da%20F%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1695322700091!5m2!1spt-BR!2sbr" className="w-full h-full" loading="lazy" ></iframe>
            </div>
        </div>
    )
}