import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormEvent } from 'react';

interface TodoAdderProps {
  addTask: (content: string) => void;
}

function TodoAdder({ addTask }: TodoAdderProps) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const contentField = (e.target as any).content;
    addTask(contentField.value);
    contentField.value = '';
  }

  return (
    <form 
      className="relative flex w-full leading-[48px] mb-4"
      onSubmit={onSubmit}
    >  
      <input
        required
        type="text"
        name='content'
        className="w-full pl-4 rounded" 
        placeholder="新增代辦事項" 
      />
      <button 
        type="submit" 
        className="absolute w-10 h-10 rounded bg-grey-3 top-1 right-1"
      >
        <FontAwesomeIcon icon={faPlus} color="white" className="h-6" />
      </button>
    </form>
  )
}

export default TodoAdder;