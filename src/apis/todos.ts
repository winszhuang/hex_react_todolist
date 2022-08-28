import { useApi } from '../hooks/useApi';

export function apiGetTodos() {
  return useApi().get('/todos');
}

export function apiPostTodos(data: TodoData) {
  return useApi().post('/todos', data);
}

export function apiEditTodos(id: string, data: TodoData) {
  return useApi().put(`/todos/${id}`, data);
}

export function apiDeleteTodos(id: string) {
  return useApi().delete(`/todos/${id}`);
}

export function apiToggleTodoIsDone(id: string) {
  return useApi().patch(`/todos/${id}/toggle`);
}