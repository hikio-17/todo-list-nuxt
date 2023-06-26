<template>
  <div class="container d-flex justify-content-center mt-4">
    <div class="row card p-4 w-50">
      <h5 class="text-center mb-3">
        Login Your Account
      </h5>
      <Notification v-if="errorMessage" :message="errorMessage"/>
      <b-form @submit.prevent="onSubmit">
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
              Login
            </b-button>
          </div>
          <span>
            don't have your account?
            <nuxt-link to="/auth/register">
              Register
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
  components: { Notification },
  middleware: 'guest',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errorMessage: null
    }
  },
  methods: {
    async onSubmit (event) {
      this.errorMessage = null
      try {
        await this.$auth.loginWith('local', {
          data: this.form
        })

        this.$router.push('/app')
      } catch (error) {
        this.errorMessage = error.response.data.message
      }
    }
  }
}
</script>
