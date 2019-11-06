import { uuid } from './utils'

export default {
  name: 'workshop',
  columns: [
    {
      name: 'todo', // name of the board
      tasks: [
        {
          description: 'Test description',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'Test description',
          name: 'second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'Test description',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'done',
      tasks: [
        {
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        }
      ]
    }
  ]
}
