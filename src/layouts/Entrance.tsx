import { Outlet } from 'react-router-dom';
import Img from '../assets/img.png';
import CheckImg from '../assets/check.png';

export function Entrance() {
  return (
    <div className="flex h-screen text-black px-28 bg-primary">
      <div className="items-center hidden md:w-1/2 md:flex">
        <div className="w-full text-center">
          <h1 className="flex items-center justify-center mb-4">
            <img className="inline-block mr-1 " src={CheckImg} alt="" />
            <span className="text-[32px] leading-[50px] font-bold">
              ONLINE TODO LIST
            </span>
          </h1>
          <img className="w-full" src={Img} alt="" />
        </div>
      </div>
      <main className="flex flex-col items-center justify-center flex-1 pl-14">
        <Outlet />
      </main>
    </div>
  );
}

export default Entrance;
