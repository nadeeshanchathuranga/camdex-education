<template>
  <div class="container-fluid bg-brand-blue-dark">
    <div class="container">
      <div class="row align-items-center py-2">
        <div class=" col-lg-3 col-sm-4 col-6">
          <RouterLink to="/" title="Camdex Education | Home">
            <img :src="'/images/logo.png'" class="w-100" alt="Camdex Education">
          </RouterLink>
        </div>

        <div class="col-lg-9 col-sm-8 col-6">
          <div class="d-flex justify-content-end d-lg-none">
            <button
              :class="{ 'menu-toggle-btn': true, 'active': isMenuOpen }"
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
                <RouterLink class="nav-link-custom" to="/" active-class="active" exact-active-class="active" aria-current="page">Home</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" to="/about" active-class="active" exact-active-class="active">About</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" to="/instructor" active-class="active" exact-active-class="active">Instructors</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" to="/class-fees" active-class="active" exact-active-class="active">Class Fees</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#faq' }" active-class="active" exact-active-class="active">FAQ</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom btn-nav" :to="{ path: '/', hash: '#join-us' }" active-class="active" exact-active-class="active">Join us</RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-12 d-lg-none mt-2">
          <nav :class="{ 'mobile-nav-panel': true, 'open': isMenuOpen }">
            <div class="d-flex justify-content-end mb-3">
              <button class="nav-close-btn" @click="closeMenu" aria-label="Close menu">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <ul class="mobile-nav-links mb-0">
              <li>
                <RouterLink class="nav-link-custom" to="/" active-class="active" exact-active-class="active" aria-current="page" @click="closeMenu">Home</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" to="/about" active-class="active" exact-active-class="active" @click="closeMenu">About</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" to="/instructor" active-class="active" exact-active-class="active" @click="closeMenu">Instructors</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" to="/class-fees" active-class="active" exact-active-class="active" @click="closeMenu">Class Fees</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#faq' }" active-class="active" exact-active-class="active" @click="closeMenu">FAQ</RouterLink>
              </li>
              <li>
                <RouterLink class="nav-link-custom" :to="{ path: '/', hash: '#join-us' }" active-class="active" exact-active-class="active" @click="closeMenu">Join us</RouterLink>
              </li>
            </ul>
          </nav>
        </div>

        <div
          v-if="isMenuOpen"
          class="menu-overlay d-lg-none"
          @click="closeMenu"
        ></div>
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

