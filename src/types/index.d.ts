interface TaskData {
  content: string,
  id: string,
  isDone: boolean
}

interface SignInFormValues {
  email: string,
  password: string
}

interface SignUpFormValues extends SignInFormValues {
  nickname: string,
  confirmPassword: string
}
