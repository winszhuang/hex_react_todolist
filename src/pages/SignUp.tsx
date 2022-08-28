import { Link, useNavigate } from 'react-router-dom';
import BaseForm from '../components/BaseForm';
import BaseInput from '../components/BaseInput'
import CheckImg from '../assets/check.png';
import { apiSignUp } from '../apis/users';
import { emailValidation, minLengthValidation } from '../validation/validation'

function SignUp() {
  const navigate = useNavigate();

  async function onSubmit(data: SignUpFormValues) {
    const { email, password, nickname } = data;
    try {
      await apiSignUp({
        user: {
          email,
          password,
          nickname
        }
      });
      navigate('/home');
    } catch (error) {
      alert('輸入內容錯誤');
    }
  }

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

      <BaseForm<SignUpFormValues> onSubmit={onSubmit}>
        <BaseInput
          label="Email"
          placeHolder="請輸入Email"
          name='email'
          registerOptions={{ ...emailValidation }}
        />
        <BaseInput
          label="您的暱稱"
          placeHolder="請輸入您的暱稱"
          name='nickname'
          registerOptions={minLengthValidation(2)}
          />
        <BaseInput
          label="密碼"
          placeHolder="請輸入密碼"
          type="password"
          name="password"
          registerOptions={minLengthValidation(2)}
        />
        <BaseInput
          outerClassName="mb-6"
          label="再次輸入密碼"
          placeHolder="請再次輸入密碼"
          type="password"
          name="confirmPassword"
          watchFor='password'
        />
        <div className="text-center">
          <button type="submit" className="px-12 py-3 mb-4 text-white rounded bg-grey-3 ">
            註冊帳號
          </button>
          <br />
          <Link to="/signIn">
            <span>
              登入
            </span>
          </Link>
        </div>
      </BaseForm>
    </div>
  );
}

export default SignUp;
