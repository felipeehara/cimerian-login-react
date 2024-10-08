"use client";
import Image from 'next/image';
import {useRouter} from 'next/navigation';

import iconEdit from '/public/Svgs/Profile/edit.svg';
import iconExit from '/public/Svgs/Profile/exit.svg';

export const Profile = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/EditProfile');
  };

  return (
    <div className='absolute bg-white'>
      <div className="border w-auto flex">
        <ul>
          <li className="text-center">Felipe Ehara</li>
          <li> 
            <button className="hover:bg-gray-300 w-52 flex gap-2" 
              onClick={handleNavigation}>
              <Image 
                src={iconEdit} 
                alt="Edit Icon" 
                width={20} 
                height={20}
                className='ml-1' 
              /> 
              <p>Editar Perfil</p>
            </button>
          </li>
          <li>
            <button className="hover:bg-gray-300 w-52 flex gap-2">
              <Image 
                src={iconExit} 
                alt="Exit Icon" 
                width={20}
                height={20} 
                className='ml-1'
              /> 
              <p>Sair</p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const ProfileMobile = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/EditProfile');
  };
    return (
      <div className=''>
        <div className="w-auto flex text-xl text-white bg-gray-700">
          <ul className='gap-3 flex flex-col '>
            <li> 
              <button className="hover:bg-gray-300 w-64 p-3 flex gap-2 "
              onClick={handleNavigation}>
                <Image 
                  src={iconEdit} 
                  alt="Edit Icon" 
                  width={20} 
                  height={20}
                  className='ml-1' 
                /> 
                <p>Editar Perfil</p>
              </button>
            </li>
            <li>
              <button className="hover:bg-gray-300 w-64 p-3 flex gap-2 ">
                <Image 
                  src={iconExit} 
                  alt="Exit Icon" 
                  width={20}
                  height={20} 
                  className='ml-1'
                /> 
                <p>Sair</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
