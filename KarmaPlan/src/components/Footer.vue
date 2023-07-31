<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <footer>
        <ul>
            <li>
                <RouterLink to="/about" class="link">About</RouterLink>
            </li>
            <li class="link">GitHub</li>
            <li class="link">Youtube</li>
        </ul>
    </footer>
</template>