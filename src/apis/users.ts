import { useApi } from '../hooks/useApi';

export function signIn(data: SignInReq) {
  return useApi().post('/users/sign_in', data)
}

export function signUp(data: SignUpReq) {
  return useApi().post('/users', data)
}

export function signOut() {
  return useApi().delete('/users/sign_out')
}

