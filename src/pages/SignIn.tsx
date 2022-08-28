import { Link, useNavigate } from 'react-router-dom';
import CheckImg from '../assets/check.png';
import { apiSignIn } from '../apis/users';
import BaseForm from '../components/BaseForm';
import BaseInput from '../components/BaseInput';
import { emailValidation, minLengthValidation } from '../validation/validation';

function SignIn() {
  const navigate = useNavigate();

  async function onSubmit(data: SignInFormValues) {
    const { email, password } = data;
    
    try {
      await apiSignIn({
        user: {
          email,
          password
        }
      });
      navigate('/');
    } catch (error) {
      alert('輸入內容錯誤');
    }
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

      <BaseForm<SignInFormValues> onSubmit={onSubmit}>
        <BaseInput
          label="Email"
          placeHolder="請輸入Email"
          name='email'
          registerOptions={{ ...emailValidation }}
        />
        <BaseInput
          label="密碼"
          placeHolder="請輸入密碼"
          type="password"
          name='password'
          registerOptions={minLengthValidation(2)}
        />
        <div className="text-center">
          <button
            type="submit"
            className="px-12 py-3 mb-4 text-white rounded bg-grey-3"
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
      </BaseForm>
    </div>
  );
}

export default SignIn;
