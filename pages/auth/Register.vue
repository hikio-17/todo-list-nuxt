<template>
  <div class="container d-flex justify-content-center mt-4">
    <div class="row card p-4 w-50">
      <h5 class="text-center mb-3">
        Register Your Account
      </h5>
      <Notification v-if="errorMessage" :message="errorMessage" />
      <b-form v-if="show" @submit="onSubmit" @reset="onReset">
        <b-form-group label="Username">
          <b-form-input
            v-model="form.username"
            placeholder="Enter username"
            required
          />
        </b-form-group>

        <b-form-group
          label="Email address"
        >
          <b-form-input
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          />
        </b-form-group>

        <b-form-group
          label="Enter Password"
        >
          <b-form-input
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required
          />
        </b-form-group>

        <div class="d-flex justify-content-between align-items-center mt-4">
          <div>
            <b-button type="submit" variant="primary">
              Submit
            </b-button>
            <b-button type="reset" variant="danger">
              Reset
            </b-button>
          </div>
          <span>
            already your account?
            <nuxt-link to="/auth/login">
              Login
            </nuxt-link>
          </span>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import Notification from '~/components/Notification.vue'

export default {
  components: {
    Notification
  },
  middleware: 'guest',
  data () {
    return {
      form: {
        email: '',
        username: '',
        password: ''
      },
      show: true,
      errorMessage: ''
    }
  },
  methods: {
    async onSubmit (event) {
      event.preventDefault()
      this.errorMessage = ''
      try {
        await this.$axios.post('register', this.form)
        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })

        this.$router.push('/app')
      } catch (error) {
        this.errorMessage = error.response.data.message
      }
    },
    onReset (event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.username = ''
      this.form.password = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
