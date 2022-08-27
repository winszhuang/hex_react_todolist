import { Link } from 'react-router-dom';
import TextInputter from '../components/TextInputer';
import CheckImg from '../assets/check.png';

function SignUp() {
  return (
    <div className="md:w-80">
      <section className="flex items-center md:hidden mb-[22px]">
        <img className="mr-1 w-9 h-9" src={CheckImg} alt="" />
        <h1 className="flex items-center justify-center text-[32px] leading-[50px] font-bold font-balooThambi ">
          ONLINE TODO LIST
        </h1>
      </section>
      <h2 className="mb-8 text-xl font-bold md:mb-6 md:text-2xl">
        註冊帳號
      </h2>
      <form action="#" method="POST" className="w-full">
        <TextInputter
          outerClassName="mb-4"
          label="Email"
          placeHolder="請輸入Email"
          type="text"
        />
        <TextInputter
          outerClassName="mb-4"
          label="您的暱稱"
          placeHolder="請輸入您的暱稱"
          type="text"
        />
        <TextInputter
          outerClassName="mb-4"
          label="密碼"
          placeHolder="請輸入密碼"
          type="password"
        />
        <TextInputter
          outerClassName="mb-6"
          label="再次輸入密碼"
          placeHolder="請再次輸入密碼"
          type="password"
        />
        <div className="text-center">
          <button type="button" className="px-12 py-3 mb-4 text-white rounded bg-grey-3 ">
            註冊帳號
          </button>
          <br />
          <Link to="/signIn">
            <span>
              登入
            </span>
          </Link>
        </div>
      </form>
    </div>
    // <div className="w-full">
    //   <h2 className="mb-6 text-2xl font-bold">
    //     註冊帳號
    //   </h2>
    //   <form action="#" method="POST">
    //     <TextInputter
    //       label="Email"
    //       placeHolder="請輸入Email"
    //       type="text"
    //     />
    //     <TextInputter
    //       label="您的暱稱"
    //       placeHolder="請輸入您的暱稱"
    //       type="text"
    //     />
    //     <TextInputter
    //       label="密碼"
    //       placeHolder="請輸入密碼"
    //       type="password"
    //     />
    //     <TextInputter
    //       label="再次輸入密碼"
    //       placeHolder="請再次輸入密碼"
    //       type="password"
    //     />
    //     <div className="text-center">
    //       <button type="button" className="px-12 py-3 mb-4 text-white rounded bg-grey-3 ">
    //         註冊
    //       </button>
    //       <br />
    //       <Link to="/signIn">
    //         <span>
    //           登入
    //         </span>
    //       </Link>
    //     </div>
    //   </form>
    // </div>
  );
}

export default SignUp;
