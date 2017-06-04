import dispatcher from '../dispatcher.js'

export function createTodo (text) {
  dispatcher.dispatch({
    type: 'CREATE_TODO',
    text
  })
}

export function deleteTodo (id) {
  dispatcher.dispatch({
    type: 'DELETE_TODO',
    id
  })
}

export function reloadTodos () {
  dispatcher.dispatch({
    type: 'FETCH_TODOS'
  })
  setTimeout(() => {
    dispatcher.dispatch({
      type: 'RECEIVE_TODOS',
      todos: [
        {
          id: 828323,
          text: 'Go shopping again',
          complete: false
        },
        {
          id: 121313,
          text: 'Hug Wife',
          complete: true
        }
      ]
    })
  }, 1000)
}
