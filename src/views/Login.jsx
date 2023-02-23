export default function login() {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar sesión</h1>
      <p>Para crear un pedido, debes iniciar sesión.</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
          <div className="mb-4">
            <label 
              htmlFor="email"
              className="text-slate-800"
            >
              Email:
            </label>
            <input 
              id="email"
              type="email" 
              className="mt-2 w-full p-3 bg-gray-50 border border-slate-200 rounded-md"
              name="email"
              placeholder="Tu email"
              
            />
          </div>

          <div className="mb-4">
            <label 
              htmlFor="password"
              className="text-slate-800"
            >
              Password:
            </label>
            <input 
              id="password"
              type="password" 
              className="mt-2 w-full p-3 bg-gray-50 border border-slate-200 rounded-md"
              name="password"
              placeholder="Tu password"
              
            />
          </div>

          <input 
            type="submit" 
            value="Iniciar sesión" 
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded-md" 
          />
        </form>
      </div>
    </>
  )
}
