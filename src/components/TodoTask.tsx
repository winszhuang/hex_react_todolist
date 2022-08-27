import CheckedIcon from '../assets/Checked.png';
import CloseIcon from '../assets/Close.png';

interface TodoTaskProps {
  task: TaskData,
  toggleIsDone: any,
  removeTask: any
}

function TodoTask({ task, toggleIsDone, removeTask }: TodoTaskProps) {
  return (
    <li
      className="flex items-stretch group"
      aria-hidden="true"
    >
      <div className='flex flex-1 pb-4 border-b border-b-slate-200'>
        {
          task.isDone
            ? <img 
                src={CheckedIcon} 
                alt="" 
                className="w-5 h-5 mr-4 cursor-pointer" 
                onClick={toggleIsDone}
              />
            : <input 
                type="checkbox"
                className="w-5 h-5 mr-4 border border-grey-2 rounded-[5px] appearance-none checked:border-none cursor-pointer" 
                onClick={toggleIsDone}
              />
        }
        <span className="text-sm">{ task.content }</span>
      </div>
      <img
        onClick={removeTask}
        src={CloseIcon} 
        alt="" 
        className='invisible ml-4 w-[14px] h-[14px] cursor-pointer mt-2 group-hover:visible hover:text-black'
      />
    </li>
  );
}

export default TodoTask;
