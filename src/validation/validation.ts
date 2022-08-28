import { RegisterOptions } from 'react-hook-form';

export const emailValidation: RegisterOptions = {
  required: true,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: '錯誤的email格式'
  }
}

export const minLengthValidation: (length: number) => RegisterOptions = (length) => ({
  required: true,
  minLength: {
    value: length,
    message: `至少超過${length}碼`
  },
})

