import { useState } from 'react';
import { tabOptions } from '../constants/tab.const';
import { TabEnum } from '../enums/tab.enum';
import useTodoList from '../hooks/useTodoList';
import CheckImg from '../assets/check.png';
import TodoAdder from '../components/TodoAdder';
import TodoTask from '../components/TodoTask';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(tabOptions[0].value);
  const {
    todoList,
    toggleIsDone,
    removeTask,
    clearDone,
    addTask
  } = useTodoList();
  
  const filterTodoList = todoList.filter({
    [TabEnum.All]: (item: TaskData) => item,
    [TabEnum.Todo]: (item: TaskData) => !item.isDone,
    [TabEnum.Done]: (item: TaskData) => item.isDone
  }[currentTab])

  const captionText = currentTab === TabEnum.Todo
      ? `${todoList.filter(item => !item.isDone).length}個未完成項目`
      : `${todoList.filter(item => item.isDone).length}個已完成項目`;

  function logout() {
    navigate('/signin');
  }

  return (
    <div className="h-screen px-8 text-grey-3 bg-primary font-noto">
      <header className="flex items-center   pt-[18px] pb-10">
        <img className="mr-1 w-9 h-9" src={CheckImg} alt="" />
        <h1 className="flex items-center justify-center mr-auto text-2xl font-bold font-balooThambi">
          ONLINE TODO LIST
        </h1>
        <span className="mr-6 cursor-pointer">
          王小明的代辦
        </span>
        <span className="cursor-pointer" onClick={logout}>
          登出
        </span>
      </header>
      <main className="w-[500px] mx-auto">
        <TodoAdder
          addTask={addTask}
        />
        <section className="bg-white rounded">
          <ul className="grid grid-cols-3 text-center border-b-2 border-grey-1">
            {
              tabOptions.map(tab => (
                  <li 
                    key={tab.key}
                    className={'py-4 text-sm text-grey-2 cursor-pointer ' + (tab.value === currentTab ? 'border-b border-black text-black' : '')}
                    onClick={() => setCurrentTab(tab.value)}
                  >
                    {tab.name}
                  </li>
                )
              )
            }
          </ul>
          <ul className="p-6 pr-4 space-y-4">
            {
              filterTodoList.length
                ? filterTodoList.map((item) => (
                    <TodoTask
                      key={item.id}
                      toggleIsDone={() => toggleIsDone(item.id)}
                      removeTask={() => removeTask(item.id)}
                      task={item}
                    />
                  ))
                : 
              <div className='pb-4 leading-5 text-center border-b border-b-slate-200'>該區域無事項</div>
            }
          </ul>
          <div className='flex justify-between pb-6 pl-6 pr-4 text-sm'>
            <p>{ captionText }</p>
            <span 
              onClick={clearDone}
              className='ml-auto mr-8 cursor-pointer text-grey-2'>清除已完成項目</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
