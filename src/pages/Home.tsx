import { useState } from 'react';
import CheckImg from '../assets/check.png';
import generateRandomId from '../genId';
import TodoAdder from '../components/TodoAdder';
import TodoTask from '../components/TodoTask';
import { tabOptions } from '../constants/tab.const';
import { TabEnum } from '../enums/tab.enum';

function Home() {
  const [currentTab, setCurrentTab] = useState(tabOptions[0].value);
  const [todoList, setTodoList] = useState<TaskData[]>([
    { 
      content: '把冰箱發霉的檸檬拿去丟', 
      isDone: false, 
      id: generateRandomId() 
    }
  ]);
  const filterTodoList = () => {
    const strategy = {
      [TabEnum.All]: (item: TaskData) => item,
      [TabEnum.Todo]: (item: TaskData) => !item.isDone,
      [TabEnum.Done]: (item: TaskData) => item.isDone
    }

    return todoList.filter(strategy[currentTab])
  }
  const captionText = currentTab === TabEnum.Todo
      ? `${todoList.filter(item => !item.isDone).length}個未完成項目`
      : `${todoList.filter(item => item.isDone).length}個已完成項目`;

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
        <span className="cursor-pointer">
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
              filterTodoList().map((item) => (
                <TodoTask
                  key={item.id}
                  toggleIsDone={() => toggleIsDone(item.id)}
                  removeTask={() => removeTask(item.id)}
                  task={item}
                />
              ))
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
