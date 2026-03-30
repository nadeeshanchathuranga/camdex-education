<template>
  <div class="container-fluid bg-brand-blue-dark">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3">
          <RouterLink to="/" title="Camdex Education | Home">
            <img :src="'/images/logo.png'" class="w-100" alt="Camdex Education">
          </RouterLink>
        </div>

        <div class="col-lg-9">
          <nav class="navbar navbar-expand-lg navbar-dark py-0">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink class="nav-link font-14 fw-normal text-white" to="/" exact-active-class="active" aria-current="page">Home</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-white" to="/about">About</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-white" :to="{ path: '/', hash: '#instructors' }">Instructors</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-white" :to="{ path: '/', hash: '#class-fees' }">Class Fees</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-white" :to="{ path: '/', hash: '#faq' }">FAQ</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink class="nav-link text-white" :to="{ path: '/', hash: '#join-us' }">Join us</RouterLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
