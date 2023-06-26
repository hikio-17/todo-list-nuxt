<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h2 class="card-title">
          My Profile
        </h2>
      </div>
      <div class="card-body">
        <p>
          <strong>Username: </strong>
          {{ loggedInUser.username }}
        </p>
        <p>
          <strong>Email: </strong>
          {{ loggedInUser.email }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>
