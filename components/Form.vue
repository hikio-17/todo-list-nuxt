<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <form>
    <div class="form-group">
      <label>Title</label>
      <input v-model="task.title" type="text" class="form-control" placeholder="Masukkan Title Task">
    </div>
    <div class="form-group">
      <label>Description</label>
      <input v-model="task.description" type="text" class="form-control" placeholder="Masukkan Description Task">
    </div>
    <div class="btn-group">
      <button class="btn btn-primary btn-sm" type="submit" @click.prevent="onSubmit">
        Save
      </button>
      <button class="btn btn-outline-secondary btn-sm" @click="$emit('onCancel')">
        Cancel
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      task: {
        title: '',
        description: '',
        isDone: false
      }
    }
  },

  methods: {
    onSubmit () {
      this.$emit('onSubmit', this.task)
    }
  }
}
</script>
