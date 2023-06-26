/* eslint-disable eqeqeq */
export const state = () => ({
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      description: 'ini deskripsi',
      isDone: false
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'ini deskripsi',
      isDone: false
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'ini deskripsi',
      isDone: false
    }
  ]
})

export const mutations = {
  ADD_TASK (state, task) {
    state.tasks.push(task)
  },

  TOGGLE_DONE (state, taskId) {
    const task = state.tasks.find(task => task.id == taskId)
    task.isDone = !task.isDone
  },

  DELETE_TASK (state, taskId) {
    state.tasks = state.tasks.filter(task => task.id != taskId)
  }
}

export const actions = {
  addTask (context, task) {
    context.commit('ADD_TASK', task)
  },

  deleteTask (context, taskId) {
    context.commit('DELETE_TASK', taskId)
  }
}

export const getters = {
  getTasks: (state) => {
    return state.tasks
  },

  getTaskById: state => (id) => {
    return state.tasks.find(task => task.id == id)
  }
}
