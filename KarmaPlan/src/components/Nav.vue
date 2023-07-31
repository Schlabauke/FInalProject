<script setup>
import { RouterLink, RouterView } from 'vue-router'
  </script>
  <template>
    <nav>
        <RouterLink class="link" to="/">
          <h1 class="logo">KarmaPlan</h1>
        </RouterLink>
      
      <article>
        <!-- TODO: You can only see this, whenn you're logged in -->
        <RouterLink to="/tasks" class="link" >Your tasks</RouterLink>
        <RouterLink to="/household" class="link">Your household</RouterLink>
      </article>

      <article class="lastArticle">
        <!-- ToDO: toggle function with LogIn -->
        <RouterLink to="/login" class="light-btn">Login</RouterLink>
        <RouterLink
        onClick={logoutFunction}
        class="light-btn"
        to="/login"
        >
        Logout
      </RouterLink>
      <RouterLink class="light-btn" to="/register">
        Register
      </RouterLink>
    </article>
  </nav>
</template>

