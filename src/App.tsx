import './App.css';
import childrenImg from './assets/children_chatting_with_books.svg';

function App() {

  return (
    <div className=''>
      <header className='absolute inset-0 bg-orange-400 w-full h-12'></header>
      
      <main className='relative pt-14 text-center'>
        <h1 className=' bg-pink-500 text-[80px] text-[#3E7A68]'>Lazer é para todos</h1>
        <p className='bg-pink-300 text-[27px] text-[#3E7A68]'>Encontre o melhor lugar para uma atividade de acordo <br /> com as suas nescessidades!</p>
        <img src={childrenImg} alt="" className='mt-20 mb-12' />
        <button className="mb-24 bg-[#0D6E74] rounded-xl w-60 h-14 text-[27px] text-white">Pesquisar</button>
      </main>
      <div className=" bg-[#FDF3ED] w-full h-[635px] flex flex-row justify-center">
        <section className='mt-32 text-center text-4xl font-semibold text-[#F15A38] rounded-2xl border-[#3E7A68B2] w-[831px] h-[375px] border-r-indigo-500 '>
          <span>Com o objetivo de organizar e reunir informações de lugares onde pessoas com deficiência possam se recrear e ter um momento de lazer que as levem ter saúde e bem-estar em uma plataforma de fácil uso e acesso, reunindo <span className='text-[#3E7A68]'> sugestões de lugares, avaliações e opiniões sobre estes ambientes.</span></span>
        </section>
      </div>

    </div>
  )
}

export default App
2