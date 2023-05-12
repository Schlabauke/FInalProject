<script setup>
import { RouterLink, RouterView } from 'vue-router'
  </script>
  <template>
    <nav>
      <article>
        <RouterLink className="logo" to="/">
          KarmaPlan
        </RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </article>
      
      <article>
        <!-- TODO: You can only see this, whenn you're logged in -->
        <RouterLink to="/tasks">Your tasks</RouterLink>
        <RouterLink to="/household">Your household</RouterLink>
      </article>

      <article>
        <!-- ToDO: toggle function with LogIn -->
        <RouterLink to="/login">Log In</RouterLink>
        <RouterLink
        onClick={logoutFunction}
        className="register-btn"
        to="/login"
        >
        Logout
      </RouterLink>
      <RouterLink className="register-btn" to="/register">
        Register
      </RouterLink>
    </article>
  </nav>
</template>

<style scoped>

</style>
