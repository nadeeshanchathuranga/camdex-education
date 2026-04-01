<template>

      <Header />
      <div class="container-fluid">
         <div class="row">
            <div class="col-12 px-0">
               <img :src="'/images/about.png'" class="d-block w-100 " alt="Camdex Education">
            </div>
         </div>
         <div class="container">
            <div class="row">
               <div class="col-lg-8 bg-brand-blue-dark p-lg-5 p-4 inener-section">
                  <div class="px-lg-5">
                     <h1 class="font-110 fw-bolder text-white pb-3">About us</h1>
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
                  <p class="fw-normal font-24 text-black pb-3">Our Institue takes full advantage of its location in one  of the most vibrant and diverse cities in the world. The Estudiar  mission drives our focus on quality education for all and service to our neighbors in need. </p>
                  <p class="fw-normal font-24 text-black pb-3">
                     Since our founding in 1919, The Estudiar  University has redrawn and redefined the boundaries of intellectual and  creative thought as a preeminent academic center. Our rigorous,  multidimensional approach to education dissolves walls between  disciplines and helps nurture progressive minds. At our university,  students have the academic freedom to shape their unique, individual  paths for a complex and rapidly changing world.
                  </p>
               </div>
            </div>
         </div>
      </div>
      <div class="container-fluid py-lg-5">
         <div class="container pt-lg-5">
            <div class="row align-items-center">
               <div class="col-lg-7 col-sm-7">
                  <img :src="'/images/museums.png'" class="d-block w-100 " alt="Camdex Education">
               </div>

               <div class="col-lg-5 col-sm-5 px-lg-5">
                  <h2 class="fw-bold font-110 text-black pb-4 pt-lg-0 pt-4">
                     History
                  </h2>
                  <p class="fw-normal font-18 text-black pb-3">In 1919, a group of visionaries sought a new and evolved  model of education, one providing the intellectual and creative freedom  to tackle the most pressing issues of the day.</p>
                  <p class=" "><a href="" class="text-dark fw-normal font-16 hvr-forward"><u>Discover More</u></a></p>
               </div>
            </div>
         </div>
      </div>
      <div class="container-fluid py-lg-5 my-5">
         <div class="container py-lg-5 mt-lg-5 pb-sm-5">
           <div class="row mission-more-wrap position-relative">
              <div class="col-lg-7 col-sm-6 bg-brand-blue-dark p-lg-5 mission-more-card">
                  <div class="py-5 px-lg-5">
                     <h2 class="fw-bold font-110 text-white pb-4">
                        Mission & More
                     </h2>
                     <p class="fw-normal font-18 text-white pb-3">
                        We prepare you to launch your career by providing a supportive,  creative, and professional. Our mission is to prepare students to  understand, contribute to, and succeed in a rapidly changing society,  thus making the world a better and more just plac
                     </p>

                     <p class="pt-3"><a href="" class="text-white fw-normal font-16 hvr-forward"><u>Discover More</u></a></p>
                  </div>
               </div>
              <div class="col-lg-5 col-sm-6 mission-more-image-col">
                 <img :src="'/images/image-5.png'" class="d-block w-100 mission-more-image" alt="Camdex Education">
              </div>
            </div>
         </div>
      </div>
      <Form />
      <Footer />

</template>
<script setup>
   import Header from '../components/Header.vue';
   import Footer from '../components/Footer.vue';
   import Form from '../components/Form.vue';
</script>
