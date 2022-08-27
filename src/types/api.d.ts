interface UserData {
  email: string,
  password: string,
  nickname: string
}

interface SignInReq {
  user: Omit<UserData, 'nickname'>
}

interface SignUpReq {
  user: UserData
}

interface TodoData {
  todo: {
    content: string
  }
}