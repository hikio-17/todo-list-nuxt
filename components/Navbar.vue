<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>
        TaskList
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-item">
          <nuxt-link class="nav-link" to="/app">
            Home
          </nuxt-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-if="!isAuthenticated">
            <b-navbar-nav class="nav-item">
              <nuxt-link class="nav-link" to="/auth/login">
                Login
              </nuxt-link>
            </b-navbar-nav>
            <b-navbar-nav class="nav-item">
              <nuxt-link class="nav-link" to="/auth/register">
                Register
              </nuxt-link>
            </b-navbar-nav>
          </template>
          <b-nav-item-dropdown v-else class="mr-5">
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ loggedInUser.username }}</em>
            </template>
            <b-dropdown-item>
              <nuxt-link class="nav-link text-dark" to="/app/users">
                Profile
              </nuxt-link>
            </b-dropdown-item>
            <b-dropdown-item @click="logout">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>

<style>
  body {
    overflow-x: hidden;
  }
</style>
