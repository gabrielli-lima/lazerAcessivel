import './App.css';
import childrenImg from './assets/children_chatting_with_books.svg';
import like from './assets/like.svg';
import person from './assets/person.svg';

function App() {

  return (
    <div className='absolute inset-0 scroll-smooth'>

      <header className='absolute inset-0 w-full h-8 flex flex-row justify-end mt-8 pr-8 gap-3'>
        <button type="button"><img src={person} alt="" /></button>
        <button type="button"><img src={like} alt="" /></button>
      </header>
      
      <main className='pt-28 text-center flex flex-col items-center'>
        <h1 className='text-[80px] text-[#3E7A68]'>Lazer é para todos</h1>
        <p className='text-[27px] text-[#3E7A68] mt-2'>Encontre o melhor lugar para uma atividade de acordo <br /> com as suas nescessidades!</p>
        <img src={childrenImg} alt="" className='mt-20 mb-12' />
        <button type="button" className="mb-24 bg-[#0d6f74] rounded-xl w-60 h-14 text-[27px] text-white hover:scale-110 hover:bg-[#094b4e] transition duration-300 ease-in-out ...">Pesquisar</button>
      </main>

      <div className="bg-[#FDF3ED] w-full h-auto flex flex-row justify-center">
        <section className='my-32 text-center text-4xl font-semibold text-[#F15A38] w-[831px] shadow-2xl shadow-[#F15A38] rounded-3xl p-10'>
          <span>Com o objetivo de organizar e reunir informações de lugares onde pessoas com deficiência possam se recrear e ter um momento de lazer que as leve a ter saúde e bem-estar em uma plataforma de fácil uso e acesso, reunindo <span className='text-[#3E7A68]'> sugestões de lugares, avaliações e opiniões sobre estes ambientes.</span></span>
        </section>
      </div>

    </div>
  )
}

export default App
2