interface TaskData {
  content: string,
  id: string,
  completed_at: null | undefined | string
}

interface SignInFormValues {
  email: string,
  password: string
}

interface SignUpFormValues extends SignInFormValues {
  nickname: string,
  confirmPassword: string
}
