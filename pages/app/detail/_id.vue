<template>
  <div class="py-4">
    <div class="container card">
      <div class="item-task d-flex align-items-start pt-3 pb-4">
        <input
          id="task"
          v-model="task.isDone"
          type="checkbox"
          name="status"
          class="me-2 mt-2"
          :checked="task.isDone"
        >
        <div>
          <div class="title-task mb-1">
            {{ task.title }}
          </div>
          <div class="description-task small text-muted mb-3">
            {{ task.description }}
          </div>
          <input class="form-control form-control-sm" type="date">
        </div>
      </div>
      <div class="action mt-4">
        <div
          class="btn btn-primary btn-sm mb-3"

          @click="$router.go(-1)"
        >
          Kembali
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      paramId: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters({
      getTaskById: 'tasks/getTaskById'
    }),

    task () {
      return this.getTaskById(this.paramId)
    }
  }
}
</script>
