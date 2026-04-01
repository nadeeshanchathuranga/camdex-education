<template>

      <Header />
  <div class="container-fluid">
         <div class="row">
            <div class="col-12 px-0">
               <img :src="'/images/fees.png'" class="d-block w-100 " alt="Camdex Education">
            </div>
         </div>
         <div class="container">
            <div class="row">
               <div class="col-lg-8 bg-brand-blue-dark p-lg-5 p-4 inener-section">
                  <div class="px-lg-5">
                     <h1 class="font-110 fw-bolder text-white pb-3">Class Fees</h1>
                     <p class="fw-normal font-18 text-white">The Estuidar mission drives our focus on quality education for all and service to our neighbors in need.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

<div class="container-fluid py-5">
         <div class="container">
            <div class="row justify-content-end">
               <div class="col-lg-10 pt-4">
                  <p class="fw-normal font-24 text-black pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat sem at mauris suscipit porta. Cras metus velit, elementum sed pellentesque a, pharetra eu eros. Etiam facilisis placerat euismod. Nam faucibus neque arcu, quis accumsan leo tincidunt varius. In vel diam enim. Sed id ultrices ligula. Maecenas at urna arcu. Sed. </p>
                  <p class="fw-normal font-24 text-black pb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien velit, aliquet eget commodo nec, auctor a sapien. Nam eu neque vulputate diam rhoncus faucibus. Curabitur quis varius libero. Lorem.
                  </p>




               </div>
            </div>
         </div>
      </div>

 <div class="container-fluid py-5 mb-5">
         <div class="container">
            <Syllabus />
         </div>
      </div>




       <Fees />
       <div class="py-5 my-5"></div>

      <Form />
      <Footer />

</template>

<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Form from '../components/Form.vue';
import Fees from '../components/Fees.vue';
   import Syllabus from '../components/Syllabus.vue';
</script>
