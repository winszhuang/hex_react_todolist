import { TabEnum } from '../enums/tab.enum';

export const tabOptions = [
  {
    name: '全部',
    value: TabEnum.All,
    key: 'All'
  },
  {
    name: '待完成',
    value: TabEnum.Todo,
    key: 'Todo'
  },
  {
    name: '已完成',
    value: TabEnum.Done,
    key: 'Done'
  },
]