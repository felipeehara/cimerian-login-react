import { Header } from "../Components/Header/Header";
import EditProfiles from "../Components/Profile/EditProfiles";

const EditProfile = () => {
    return(
        <div>
            <Header/>
            <div className="bg-gradient-to-br from-white to-gray-400 h-screen">
                <EditProfiles/>
            </div>    
        </div>
    )
}

export default EditProfile;