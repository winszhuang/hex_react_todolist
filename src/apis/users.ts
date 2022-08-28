import { useApi } from '../hooks/useApi';

export function apiSignIn(data: SignInReq) {
  return useApi().post('/users/sign_in', data)
}

export function apiSignUp(data: SignUpReq) {
  return useApi().post('/users', data)
}

export function apiSignOut() {
  return useApi().delete('/users/sign_out')
}

