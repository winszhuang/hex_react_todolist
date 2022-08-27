import { useState } from 'react';
import generateRandomId from '../genId';

export default function useTodoList() {
  const [todoList, setTodoList] = useState<TaskData[]>([
    { 
      content: '把冰箱發霉的檸檬拿去丟', 
      isDone: false, 
      id: generateRandomId() 
    }
  ]);

  function toggleIsDone(id: string) {
    setTodoList((prev) => {
      const copy = [...prev].map(item => ({ ...item }));
      const item = copy.find(item => item.id === id);
      if (!item) return prev;
      item.isDone = !item.isDone;
      return copy
    })
  }

  function removeTask(id: string) {
    setTodoList((prev) => prev.filter(item => item.id !== id))
  }
  
  function clearDone() {
    setTodoList((prev) => prev.filter(item => !item.isDone))
  }

  function addTask(content: string) {
    setTodoList((prev) => 
      [...prev, {
        content,
        id: generateRandomId(),
        isDone: false
      }])
  }

  return {
    todoList,
    toggleIsDone,
    removeTask,
    clearDone,
    addTask
  }
}