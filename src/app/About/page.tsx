import { MyCalls, OpenCalls } from "../Components/Calls/OpenCall";
import { Header } from "../Components/Header/Header";


const About = () => {
    return (
        <div className="bg-gradient-to-br from-white to-gray-400 h-screen">
            <Header/>
            <div className="flex gap-3 ml-10 mt-10">
                <OpenCalls/>
                <MyCalls/>
            </div>   
        </div>
    );
}

export default About;