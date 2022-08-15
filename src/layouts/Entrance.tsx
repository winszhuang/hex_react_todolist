import { Outlet } from 'react-router-dom';
import Img from '../assets/img.png';
import CheckImg from '../assets/check.png';

export function Entrance() {
  return (
    <div className="flex h-screen px-8 text-black md:px-28 bg-primary font-noto">
      <div className="items-center justify-center hidden md:w-1/2 md:flex">
        <div className="flex flex-col items-center">
          <section className="flex items-center">
            <img className="mr-1 w-9 h-9" src={CheckImg} alt="" />
            <h1 className="flex items-center justify-center text-[32px] leading-[50px] font-bold font-balooThambi ">
              ONLINE TODO LIST
            </h1>
          </section>
          <img src={Img} alt="" className=" w-96" />
        </div>
      </div>
      <main className="flex flex-col justify-center flex-1 md:ml-16">
        <Outlet />
      </main>
    </div>
  );
}

export default Entrance;
