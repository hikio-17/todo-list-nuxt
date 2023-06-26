<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div
    :class="[
      'item-task d-flex align-items-start border-bottom pt-3 pb-4',
      isGrid ? 'col-12 col-md-6 col-lg-4' : 'col-12'
    ]"
  >
    <input
      id="task"
      v-model="task.isDone"
      type="checkbox"
      name="status"
      class="me-2 mt-2"
      :checked="task.isDone"
      @click="$emit('toggle-task', task.id)"
    >
    <div
      :class="[
        'd-flex flex-column',
        task.isDone ? 'strikethrough' : ''
      ]"
    >
      <div class="title-task mb-1">
        <nuxt-link :to="'app/detail/' + task.id">
          {{ task.title }}
        </nuxt-link>
      </div>
      <div class="description-task small text-muted">
        {{ task.description }}
      </div>
      <a class="text-danger" @click="$emit('onDelete', task.id)">
        Delete
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    task: Object,
    isGrid: {
      type: Boolean,
      required: true,
      default: false
    }
  }
}
</script>

<style>
   .strikethrough {
      text-decoration: line-through;
   }
</style>
