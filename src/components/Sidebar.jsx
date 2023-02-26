import Categoria from './Categoria'
import { categorias } from "../data/categorias"

export default function Sidebar() {
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img 
          src="img/logo.svg" 
          alt="logotipo" 
          className="w-40"  
        />
      </div>

      <div className="mt-10">
        {categorias.map( categoria => (
          <Categoria 
            categoria={categoria}
          />
        ))}
      </div>
      <div className='my-5 px-5'>
          <button
            className='text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-800'
            type='button'
          >
            Cacelar orden
          </button>
      </div>
    </aside>
  )
}
