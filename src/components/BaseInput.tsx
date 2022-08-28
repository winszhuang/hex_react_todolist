import { useFormContext, RegisterOptions } from 'react-hook-form'

interface Props {
  label: string,
  placeHolder: string,
  name: string,
  registerOptions?: RegisterOptions,
  type?: string,
  /** 根據其他欄位的值驗證，使用此欄位就不使用registerOptions */
  watchFor?: string,
  outerClassName?: string,
}

export default function BaseInput({
  label, 
  placeHolder,
  name,
  registerOptions = {},
  type = 'text',
  watchFor,
  outerClassName = '',
}: Props) {
  const { register, formState, watch } = useFormContext();
  const errorMessage = formState.errors[name]?.message as string;
  const registerInput = watchFor
    ? {
        ...register(name, {
          required: true,
          validate: (value: string) => {
            if (watch(watchFor) != value) {
              return '確認密碼錯誤';
            }
          }
        })
      }
    : { ...register(name, registerOptions) };

  return (
    <div className={outerClassName}>
      <label
        htmlFor="first-name"
        className="block mb-1 font-bold text-gray-700"
      >
        {label}
      </label>
      <input
        { ...registerInput }
        type={type}
        placeholder={placeHolder || '請輸入Email'}
        autoComplete="given-name"
        className="block w-full px-4 py-3 rounded focus:ring-indigo-500 focus:border-indigo-500"
      />
      <div className={`text-xs text-red-500 leading-[22px] ml-1 ` + (errorMessage ? '!visible' : 'invisible')}>
        {errorMessage || '佔位用'}
      </div>
    </div>
  );
}