import { AxiosResponse } from 'axios';
import { useState } from 'react';
import { apiDeleteTodos, apiPostTodos, apiToggleTodoIsDone } from '../apis/todos';
import generateRandomId from '../genId';

export default function useTodoList() {
  const [refreshId, setRefreshId] = useState('');
  const [todoList, setTodoList] = useState<TaskData[]>([]);

  async function toggleIsDone(id: string) {
    try {
      await apiToggleTodoIsDone(id);
      setRefreshId(Date.now() + generateRandomId())
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  async function removeTask(id: string) {
    try {
      await apiDeleteTodos(id)
      setRefreshId(Date.now() + generateRandomId())
    } catch (error) {
      console.log((error as Error).message)
    }
  }
  
  async function clearDone() {
    try {
      const promiseStack = todoList
        .filter(item => item.completed_at!!)
        .reduce((prev, curr) => {
          prev.push(apiDeleteTodos(curr.id))
          return prev;
        }, [] as Array<Promise<AxiosResponse<any, any>>>);
  
      await Promise.all(promiseStack);
      setRefreshId(Date.now() + generateRandomId())
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  async function addTask(content: string) {
    try {
      await apiPostTodos({ todo: { content } })
      setRefreshId(Date.now() + generateRandomId())
    } catch (error) {
      console.log((error as Error).message)
    }
  }

  return {
    todoList,
    toggleIsDone,
    removeTask,
    clearDone,
    addTask,
    setTodoList,
    refreshId
  }
}