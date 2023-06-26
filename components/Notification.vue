<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      {{ message }}
    </b-alert>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dismissCountDown: 5
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    }
    //  showAlert () {
    //    this.dismissCountDown = this.dismissSecs
    //  }
  }
}
</script>
