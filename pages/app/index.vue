<!-- eslint-disable vue/no-reserved-component-names -->
<!-- eslint-disable vue/return-in-computed-property -->
<template>
  <!-- Navbar -->
  <div>
    <div class="container mt-1">
      <div class=" d-flex justify-content-between title border-bottom d-flex align-items-center py-2">
        <h5>Task</h5>
        <div class="d-flex justify-content-between ms-auto">
          <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Search"
          >
          <div class="d-flex align-items-center justify-content-end w-100">
            <span class="mr-2">View As</span>
            <button
              class="btn btn-outline-secondary py-1 px-3"
              @click="isGrid = !isGrid"
            >
              {{ isGrid ? 'Grid' : 'List' }}
            </button>
          </div>
        </div>
      </div>

      <!-- List Task -->
      <div class="list-task border-top row">
        <CardItem
          v-for="task in resultQuery"
          :key="task.id"
          :task="task"
          :is-grid="isGrid"
          @toggle-task="toggleTask"
          @onDelete="handleDeleteTask"
        />
      </div>

      <!-- FORM -->
      <div class="action py-2">
        <button
          v-if="!isCreating"
          class="btn btn-outline-primary btn-sm mt-3 mb-2"
          @click="isCreating = !isCreating"
        >
          Add Task
        </button>
        <!-- <Form v-else @on-cancel="isCreating = !isCreating" /> -->
        <div v-else class="add-card">
          <div class="card mb-2">
            <div class="card-body d-flex flex-column p-0">
              <input v-model="newTask.title" class="form-control border-0 mb-2" placeholder="Title" type="text">
              <textarea
                v-model="newTask.description"
                class="form-control border-0 small"
                placeholder="Description"
                rows="3"
              />
            </div>
          </div>
          <div class="button-wrapper d-flex">
            <button class="btn btn-primary me-2" @click="handleSubmit">
              Save
            </button>
            <button class="btn btn-outline-secondary" @click="isCreating = !isCreating">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CardItem from '~/components/CardItem.vue'

export default {
  components: {
    CardItem
  },
  middleware: 'isauth',
  data () {
    return {
      // Daftar Task
      isCreating: false,
      isGrid: false,
      searchQuery: '',
      newTask: {
        title: '',
        description: '',
        isDone: false
      }
    }
  },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    ...mapState('tasks', ['tasks']),
    resultQuery () {
      if (this.searchQuery) {
        return this.tasks.filter((item) => {
          return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
        })
      } else {
        return this.tasks
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask', 'deleteTask']),

    toggleTask (taskId) {
      this.$store.commit('tasks/TOGGLE_DONE', taskId)
    },

    handleSubmit () {
      const payload = {
        id: this.tasks.length + 1,
        ...this.newTask
      }

      this.addTask(payload)

      this.newTask = {
        title: '',
        description: '',
        isDone: false
      }
      this.isCreating = false
    },

    handleDeleteTask (taskId) {
      this.deleteTask(taskId)
    }
  }
}
</script>
