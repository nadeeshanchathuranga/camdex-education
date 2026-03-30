<template>
  <div class="container-fluid bg-brand-blue-dark">
    <div class="container">
      <div class="row align-items-center py-2">
        <div class=" col-lg-3 col-6">
          <RouterLink to="/" title="Camdex Education | Home">
            <img :src="'/images/logo.png'" class="w-100" alt="Camdex Education">
          </RouterLink>
        </div>

        <div class="col-lg-9 col-6">
          <div class="d-flex justify-content-end d-lg-none">
            <button
              class="menu-toggle-btn"
              type="button"
              aria-label="Toggle navigation"
              :aria-expanded="isMenuOpen ? 'true' : 'false'"
              @click="isMenuOpen = !isMenuOpen"
            >
              <span class="menu-toggle-line"></span>
              <span class="menu-toggle-line"></span>
              <span class="menu-toggle-line"></span>
            </button>
          </div>

          <nav class="desktop-nav d-none d-lg-flex justify-content-end">
            <ul class="nav-links-list mb-0">
              <li>
                <RouterLink class="nav-link-custom" to="/" exact-active-class="active" aria-current="page">Home</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" to="/about">About</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#instructors' }">Instructors</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#class-fees' }">Class Fees</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#faq' }">FAQ</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom btn-nav" :to="{ path: '/', hash: '#join-us' }">Join us</RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <div v-if="isMenuOpen" class="col-12 d-lg-none mt-2">
          <nav class="mobile-nav-panel">
            <ul class="mobile-nav-links mb-0">
              <li>
                <RouterLink class="nav-link-custom" to="/" exact-active-class="active" aria-current="page" @click="closeMenu">Home</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" to="/about" @click="closeMenu">About</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#instructors' }" @click="closeMenu">Instructors</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#class-fees' }" @click="closeMenu">Class Fees</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#faq' }" @click="closeMenu">FAQ</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#join-us' }" @click="closeMenu">Join us</RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

