import Image from "next/image";
import imgLogo from '/public/img/logo_cimerianeditado.png'

export default function Home() {
  return (
    
            <div className="relative bg-fotoFabrica bg-cover h-screen bg-right bg-fixed overflow-hidden flex flex-col justify-center items-center xl:items-start">
              <div className="container relative z-10 xl:bg-black xl:flex xl:flex-col xl:items-center      xl:justify-between xl:max-w-lg xl:h-full xl:bg-opacity-80 rounded-md xl:ml-3.5 xl:my-3.5 ">
          
                <div className="flex justify-center xl:mt-36 2xl:mb-16">
                  <Image className="w-80 md:w-96 lg:w-1/2 xl:w-96  2xl:max-w-5xl" src={imgLogo} alt="Logo"></Image>
                </div>
                <div className="flex flex-col justify-center items-center mt-8 xl:mb-36 2xl:mb-96">
                      <input className="w-80 mb-5 border-4 border-white text-xl focus:border-gray-500 focus:outline-none rounded-md md:w-96 lg:w-1/2 lg:text-3xl xl:m-1 xl:h-10 xl:w-96 xl:text-xl xl:bg-gray-300 xl:border-gray-300" type="email" placeholder="Usuário"></input>
                      <input className="w-80 mb-5 border-4 border-white text-xl rounded-md focus:border-gray-500 focus:outline-none md:w-96 lg:w-1/2 lg:text-3xl xl:m-1 xl:h-10 xl:w-96 xl:text-xl xl:bg-gray-300 xl:border-gray-300" type="password" placeholder="Senha"></input>
                      <button className="px-12 py-2 bg-gray-300 rounded-md font-bold text-xl active:bg-gray-400 md:py-3 md:px-14 lg:py-5 lg:px-16 lg:text-3xl xl:w-28 xl:h-10 xl:py-0 xl:px-0 xl:text-xl">Entrar</button>
                </div>

              </div>
            </div>
  
   
  );
}
