import { MyCalls, OpenCalls } from "../Components/Calls/OpenCall";
import { Header } from "../Components/Header/Header";


const About = () => {
    return (
        <div>
            <Header/>
            <div className="flex gap-3 ml-10 mt-10">
                <OpenCalls/>
                <MyCalls/>
            </div>   
        </div>
    );
}

export default About;