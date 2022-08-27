import { Link, useNavigate } from 'react-router-dom';
import TextInputter from '../components/TextInputer';
import CheckImg from '../assets/check.png';

function SignIn() {
  const navigate = useNavigate();

  function signIn() {
    navigate('/home');
  }

  return (
    <div className="flex flex-col md:w-80">
      <section className="flex items-center md:hidden mb-[22px]">
        <img className="mr-1 w-9 h-9" src={CheckImg} alt="" />
        <h1 className="flex items-center justify-center text-[32px] leading-[50px] font-bold font-balooThambi ">
          ONLINE TODO LIST
        </h1>
      </section>
      <h2 className="mb-8 text-xl font-bold md:mb-6 md:text-2xl">
        最實用的線上代辦事項服務
      </h2>
      <form action="#" method="POST" className="w-full">
        <TextInputter
          label="Email"
          placeHolder="請輸入Email"
          type="text"
        />
        <TextInputter
          label="密碼"
          placeHolder="請輸入密碼"
          type="password"
        />
        <div className="text-center">
          <button
            type="button"
            className="px-12 py-3 mb-4 text-white rounded bg-grey-3"
            onClick={signIn}
          >
            登入
          </button>
          <br />
          <Link to="/signUp">
            <span>
              註冊帳號
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
