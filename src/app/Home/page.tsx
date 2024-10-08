import { Calls } from "../Components/Calls/CallsResume";
import { Header } from "../Components/Header/Header";



const Home = () => {
    return(
        <div className="bg-gradient-to-br from-white to-gray-400 h-screen">
            <Header/>

        
            <div className="ml-10 mt-10 border-t-4 border-red-600 mr-10">   
                <p className="flex gap-1"> <b>Olá,</b> <h1 className="text-blue-600 font-bold">Felipe Ehara</h1> </p>  
                <p>Que bom te ver por aqui! :)</p>
            </div>

        <Calls/>
        </div>
    );
}

export default Home;