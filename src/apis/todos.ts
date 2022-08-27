import { useApi } from '../hooks/useApi';

export function getTodos() {
  return useApi().get('/todos')
}

export function postTodos(data: TodoData) {
  return useApi().post('/todos', data)
}

export function editTodos(id: string, data: TodoData) {
  return useApi().put(`/todos/${id}`, data)
}

export function deleteTodos(id: string) {
  return useApi().delete(`/todos/${id}`)
}

export function toggleTodoIsDone(id: string) {
  return useApi().patch(`/todos/${id}`)
}