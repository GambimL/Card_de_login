import logo from './assets/logo.png'

export default function App() {
    return (
        <div className="grid justify-items-center items-center h-screen w-screen">
            <div
                className=" h-96 w-64  bg-rose-600 scale-150 rounded-lg transition ease-in-out delay-15 hover:-translate-y-3 hover:bg-gradient-to-r hover:bg-indigo-800 hover:from-indigo-800  duration-300 ">
                <div className="grid grid-rows-4 h-96 justify-items-center items-center">
                    <div className="rows-start-1 row-span-2">
                        <img src={logo} className='scale-150'></img>
                    </div>
                    <div className="rows-start-3 grid grid-rows-2 h-auto w-64 justify-items-center ">
                        <div className="rows-start-1 ">
                            <label htmlFor="email" className=' h-auto'>
                                <p
                                    className='text-xs text-white-900 font-bold  font-sans text-white transition ease-in-out hover:text-zinc-950'>EMAIL</p>
                            </label>
                            <input
                                className="rounded-sm w-36 text-xs bg-inherit border-b border-white-500 outline-none hover:w-48 delay-15  duration-300 text-white"
                                id="email"
                                ></input>
                        </div>
                        <div className="rows-start-2 py-2">
                            <label htmlFor="senha" className=' h-auto'>
                                <p
                                    className=' text-xs text-white-900 font-bold  font-sans text-white transition ease-in-out '>SENHA</p>
                            </label>
                            <input
                                className="rounded-sm w-36 text-xs 
                                bg-inherit border-b border-white-500
                                outline-none 
                                 delay-15 animate-pulse ease-in 
                                 hover:w-48 duration-300 text-white"
                                id="senha"></input>
                        </div>
                    </div>
                    <div className="rows-start-4">
                        <button
                            className=' bg-white w-24 h-10 rounded-lg  transition ease-in-out hover:bg-zinc-600 hover:text-white  items-center grid grid-col-1 justify-items-center'>
                            <p className='cols-start-1 text-xs font-sans font-bold'>LOGIN</p>
                            
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )

}