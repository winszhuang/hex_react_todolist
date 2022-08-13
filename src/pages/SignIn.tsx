import TextInputter from '../components/TextInputer';

function SignIn() {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">
        最實用的線上代辦事項服務
      </h2>
      <form action="#" method="POST">
        <TextInputter />
        <TextInputter
          label="密碼"
          placeHolder="請輸入密碼"
          type="password"
        />
        <div className="text-center">
          <button type="button" className="px-12 py-3 mb-4 text-white bg-black rounded ">
            登入
          </button>
          <br />
          <span>
            註冊帳號
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
