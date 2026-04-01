<template>
   <Header />
   <div class="container-fluid slider-section bg-brand-blue-dark">
      <div class="container ">
         <div class="row align-items-center gy-4">
            <div class="col-lg-5 col-12 z-10">
               <h3 class="fw-bold text-light-white font-110">
                  Nurturing Minds
               </h3>
               <h3 class="fw-bold text-white font-110 pb-4">
                  Inspiring
                  Futures
               </h3>
               <p class="text-white font-18 fw-normal pb-4">Our cutting-edge services empower businesses to achieve remarkable growth and success. Discover how we can transform your vision into reality.</p>
               <div class="row g-3 hero-cta-row pb-lg-5 mb-lg-3">
                  <div class="col-sm-4 col-12">
                     <a href="#join-us" class="btn hero-btn-enroll w-100">Enroll</a>
                  </div>
                  <div class="col-sm-6 col-12">
                     <a href="#about" class="btn hero-btn-learn w-100">
                     Learn More <i class="fa-brands fa-youtube ms-2 text-danger font-30" aria-hidden="true"></i>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-lg-7 col-12">
               <div id="carouselExampleFade" class="carousel slide carousel-fade hero-carousel" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <img :src="'/images/slider-1.png'" class="d-block w-100 hero-carousel-img" alt="Camdex Education">
                     </div>
                     <div class="carousel-item">
                        <img :src="'/images/slider-2.png'" class="d-block w-100 hero-carousel-img" alt="Camdex Education">
                     </div>
                  </div>
                  <button class="carousel-control-prev d-none d-md-flex" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next d-none d-md-flex" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid google-reviews-section py-5 bg-white">
      <div class="container py-lg-3">
         <div class="row">
            <div class="col-12">
               <h3 class="font-48 fw-bolder text-center text-black pb-3">Customer reviews on Google</h3>
               <p class="google-reviews-rating mb-4 text-center ">
                  <span class="google-reviews-stars" aria-hidden="true">
                  <i class="fa-solid fa-star font-16"></i>
                  <i class="fa-solid fa-star font-16"></i>
                  <i class="fa-solid fa-star font-16"></i>
                  <i class="fa-solid fa-star font-16"></i>
                  <i class="fa-solid fa-star font-16"></i>
                  </span>
                  <span class="font-16 fw-normal text-black">5.0 rating of 12 reviews</span>
               </p>
               <div ref="reviewsCarousel" class="owl-carousel google-reviews-carousel">
                  <article class="review-flip-card">
                     <div class="review-flip-card-inner">
                        <div class="review-card review-flip-front">
                           <p class="review-stars" aria-hidden="true">
                              <i class="fa-solid fa-star font-16"></i>
                              <i class="fa-solid fa-star font-16"></i>
                              <i class="fa-solid fa-star font-16"></i>
                              <i class="fa-solid fa-star font-16"></i>
                              <i class="fa-solid fa-star font-16"></i>
                           </p>
                           <div class="row py-2">
                              <div class="col-2">
                                 <img :src="'/images/google.png'" alt="Google" class="w-100 review-google-logo">
                              </div>
                           </div>
                           <p class="font-16 fw-normal text-black pb-3">The best service I've received in a long time! The team was incredibly responsive, and their expertise was evident in the final product. There was a small miscommunication initially, but they quickly resolved it. I would definitely work with them again.</p>
                           <div class="row align-items-center">
                              <div class="col-3">
                                 <img :src="'/images/user.png'" alt="Isabella Turner" class="w-100 rounded-circle border-dark border-3">
                              </div>
                              <div class="col-8">
                                 <h4 class="font-16 fw-bolder text-black pb-1">Isabella Turner</h4>
                                 <p class="review-role font-12 fw-normal ">Project Manager</p>
                              </div>
                           </div>
                        </div>
                        <div class="review-photo-card review-flip-back">
                           <img :src="'/images/slider-img.png'" alt="Happy customer" class="review-photo">
                           <div class="review-photo-caption">
                              <div class="row">
                                 <div class="col-12">
                                    <p class="review-stars" aria-hidden="true">
                                       <i class="fa-solid fa-star font-16"></i>
                                       <i class="fa-solid fa-star font-16"></i>
                                       <i class="fa-solid fa-star font-16"></i>
                                       <i class="fa-solid fa-star font-16"></i>
                                       <i class="fa-solid fa-star font-16"></i>
                                    </p>
                                 </div>
                                 <div class="row pt-2 pb-4  align-items-center">
                                    <div class="col-3">
                                       <img :src="'/images/user.png'" alt="Isabella Turner" class="w-100 rounded-circle   border-3 border-white">
                                    </div>
                                    <div class="col-7 px-0">
                                       <h4 class="fw-normal font-16 text-white">Henry Foster</h4>
                                       <p class="font-12 fw-normal text-mute">Project Manager</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </article>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid banner-section py-5">
      <div class="container py-2">
         <div class="row g-3 g-lg-4 align-items-center">
            <div class="col-lg-4 col-sm-4">
               <div class="d-flex flex-column gap-2 gap-lg-3">
                  <p class="font-40 text-brand-blue fw-bold">Are you looking for</p>
               </div>
            </div>
            <div class="col-lg-4  col-sm-4 col-6">
               <img :src="'/images/edexcel.png'" class="w-100" alt="Camdex Education">
            </div>
            <div class="col-lg-4 col-sm-4 col-6">
               <img :src="'/images/cambridge.png'" class="w-100" alt="Camdex Education">
            </div>
         </div>
         <div class="row pt-3 pt-lg-4">
            <div class="col-12">
               <h2 class="banner-main-title mb-0">
                  <span class="main-blue">IGCSE</span>
                  <span class="sub-blue">Classes From</span>
                  <span class="main-red">Grade 7</span>
                  <span class="main-blue">to O/Levels?</span>
               </h2>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid stats-strip-section bg-brand-blue-dark py-5">
      <div class="container">
         <div class="row align-items-center g-4">
            <div class="col-lg-3 col-sm-3 col-12 ">
               <p class="font-18 text-white fw-normal">We speak with,<br class="d-none d-sm-block"> our powerful <br class="d-none d-sm-block"> statistics</p>
            </div>
            <div class="col-lg-3 col-sm-3 col-12 ">
               <div class="stats-item">
                  <h3 class="text-white pb-4">1M+</h3>
                  <p><i class="fa-solid fa-user"></i> Active Users</p>
               </div>
            </div>
            <div class="col-lg-3 col-sm-3 col-12 ">
               <div class="stats-item">
                  <h3 class="text-white pb-4">30K+</h3>
                  <p><i class="fa-solid fa-star font-16"></i> 5-Stars Reviews</p>
               </div>
            </div>
            <div class="col-lg-3 col-sm-3 col-12 ">
               <div class="stats-item">
                  <h3 class="text-white pb-4">$252M</h3>
                  <p><i class="fa-solid fa-star font-16"></i> Transactions</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="about" class="container-fluid about-section py-5">
      <div class="container pt-lg-5">
         <div class="row">
            <div class="col-lg-4 col-sm-4 col-8 mx-auto">
               <img :src="'/images/logo-2.png'" class="w-100 mt-3" alt="Camdex Education">
            </div>
            <div class="col-lg-8 col-sm-8">
               <h1 class="font-110 fw-bolder text-black pb-3">
                  About Camdex Education
               </h1>
               <p class="fw-normal font-18 text-dark">
                  At Camdex Education, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn  practical skills, build a network of industry contacts, and gain  real-world experience. You’ll have the opportunity to generate  innovative design and business solutions.
               </p>
               <p class="pt-4"><a href="" class="text-dark fw-normal font-16 hvr-forward"><u>Institute Overview</u></a></p>
            </div>
         </div>
         <Instructors />
         <div id="faq" class="row pt-5">
            <div class="col-12  ">
               <h2 class="font-48 fw-bolder text-center text-black pb-4">Make a Tour</h2>
               <p class="fw-normal font-18 text-dark">Choose your onboard grade to access instructors’ free lessons. Selecting the correct grade ensures the content matches your current knowledge level. These lessons help you understand basic concepts, build confidence, and experience the teaching style. Use this opportunity to learn step by step and prepare yourself for more advanced topics ahead </p>
            </div>
         </div>


<Syllabus />






      </div>
   </div>
   <div class="container-fluid">
      <div class="container">
         <div class="row ">
            <div class="col-12">
               <section id="apply-now" class="apply-now-section py-4 py-lg-5">
                  <h2 class="font-172 fw-bold text-dark text-center pb-3">APPLY NOW</h2>
                  <div class="row align-items-center border-bottom border-3 border-top-0 border-end-0 border-start-0 border-secondary pb-4 mx-lg-3 my-5">
                     <div class="col-2">
                        <p class="fw-bold font-20 text-dark">01</p>
                     </div>
                     <div class="col-lg-3 col-7">
                        <p class="fw-bold font-20 text-dark">You Apply</p>
                     </div>
                     <div class="col-lg-7 col-12 pt-lg-0 pt-2">
                        <p class="fw-normal font-18 text-dark">Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete.</p>
                     </div>
                  </div>
                  <div class="row align-items-center border-bottom border-3 border-top-0 border-end-0 border-start-0 border-secondary pb-4 mx-lg-3 my-5">
                     <div class="col-2">
                        <p class="fw-bold font-20 text-dark">02</p>
                     </div>
                     <div class="col-lg-3 col-7">
                        <p class="fw-bold font-20 text-dark">We Connect</p>
                     </div>
                     <div class="col-lg-7 col-12 pt-lg-0 pt-2">
                        <p class="fw-normal font-18 text-dark">After you submit your application, an admissions representative will contact you and will help you to complete the process.</p>
                     </div>
                  </div>
                  <div class="row align-items-center border-bottom border-3 border-top-0 border-end-0 border-start-0 border-secondary pb-4 mx-lg-3 my-5">
                     <div class="col-2">
                        <p class="fw-bold font-20 text-dark">03</p>
                     </div>
                     <div class="col-lg-3 col-7">
                        <p class="fw-bold font-20 text-dark">You Get Ready</p>
                     </div>
                     <div class="col-lg-7 col-12 pt-lg-0 pt-2">
                        <p class="fw-normal font-18 text-dark">Once you've completed your application and connected with an admissions representative, you're ready to create your schedule.</p>
                     </div>
                  </div>
                  <p class="pt-4"><a href="" class="text-dark fw-normal font-16 hvr-forward"><u>View All Requirements</u></a></p>
               </section>
            </div>
         </div>
      </div>
   </div>




<Fees />







   <div class="container-fluid video-section px-0">
      <div class="row">
         <div class="col-12">
            <div class="video-overlay d-flex align-items-center justify-content-center">
               <button
                  type="button"
                  class="play-button"
                  @click="openVideo"
                  data-bs-toggle="modal"
                  data-bs-target="#videoModal"
                  aria-label="Play video"
                  >
               <span class="play-icon" aria-hidden="true"></span>
               </button>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid section-e">
      <div class="container">
         <div class="row">
            <div class="col-lg-9 mx-auto bg-white py-5 px-lg-5 px-sm-4 e-top-section text-center">
               <h2 class="text-dark fw-bold font-48 pb-3">
                  The Camdex  Experience
               </h2>
               <p class="text-dark fw-normal font-16">
                  we prepare you to launch your career by providing a supportive,  creative, and professional environment from which to learn practical  skills, build a network of industry contacts, and gain real-world  experience. You’ll have the opportunity to generate innovative design  and business solutions.
               </p>
               <p class="pt-4">
                  <a href="" class="text-dark fw-normal font-16 hvr-forward">
                  <u>Discover  More</u>
                  </a>
               </p>
            </div>
         </div>
      </div>
   </div>

   <Form />
   <Footer />
   <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
         <div class="modal-content video-modal-content">
            <div class="modal-header border-0 pb-0">
               <h5 class="modal-title" id="videoModalLabel">Campus Video</h5>
               <button type="button" class="btn btn-outline-light btn-sm me-2" @click="stopVideo">Stop Video</button>
               <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body pt-2">
               <div v-if="validationMessage" class="alert alert-warning py-2" role="alert">
                  {{ validationMessage }}
               </div>
               <div class="ratio ratio-16x9">
                  <iframe
                     :src="embedVideoUrl"
                     title="Campus video"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                     allowfullscreen
                     ></iframe>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
   import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

   import Header from '../components/Header.vue';
   import Footer from '../components/Footer.vue';
   import Form from '../components/Form.vue';
   import Instructors from '../components/Instructors.vue';
   import Fees from '../components/Fees.vue';
   import Syllabus from '../components/Syllabus.vue';
   const activeVideoLink = ref('');
   const validationMessage = ref('');
   const reviewsCarousel = ref(null);
   let heroCarouselInstance = null;


   // Replace this with your real YouTube share link.
   const videoLink = 'https://youtu.be/_UCA0tXzMMU?si=7dcjhq9rlp0Zq3db';

   const toYoutubeEmbedUrl = (link) => {
       if (!link) {
           return '';
       }

       if (link.includes('youtube.com/embed/')) {
           return `${link}${link.includes('?') ? '&' : '?'}autoplay=1`;
       }

       try {
           const url = new URL(link);
           let videoId = '';

           if (url.hostname.includes('youtu.be')) {
               videoId = url.pathname.replace('/', '');
           } else {
               videoId = url.searchParams.get('v') || '';
           }

           if (videoId) {
               return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
           }
       } catch (error) {
           return '';
       }

       return '';
   };

   const embedVideoUrl = computed(() => toYoutubeEmbedUrl(activeVideoLink.value));

   const handleModalHide = (event) => {
       if (activeVideoLink.value) {
           event.preventDefault();
           validationMessage.value = 'Please stop the video before closing the modal.';
       }
   };

   const handleModalHidden = () => {
       activeVideoLink.value = '';
       validationMessage.value = '';
   };

   const openVideo = () => {
       validationMessage.value = '';
       activeVideoLink.value = videoLink;
   };

   const stopVideo = () => {
       activeVideoLink.value = '';
       validationMessage.value = '';
   };

   const closeVideo = () => {
       activeVideoLink.value = '';
       validationMessage.value = '';
   };

      const initReviewsCarousel = () => {
         const $ = window.jQuery || window.$;

         if (!$ || !reviewsCarousel.value || !$.fn || !$.fn.owlCarousel) {
            return;
         }

         const $carousel = $(reviewsCarousel.value);

         if ($carousel.hasClass('owl-loaded')) {
            return;
         }

         $carousel.owlCarousel({
            items: 4,
            margin: 25,
            loop: true,
            nav: false,
            dots: false,
            smartSpeed: 650,

            responsive: {
               0: { items: 1 },
               768: { items: 2 },
               1200: { items: 4 },
            },
         });
      };

      const destroyReviewsCarousel = () => {
         const $ = window.jQuery || window.$;

         if (!$ || !reviewsCarousel.value || !$.fn || !$.fn.owlCarousel) {
            return;
         }

         const $carousel = $(reviewsCarousel.value);

         if ($carousel.hasClass('owl-loaded')) {
            $carousel.trigger('destroy.owl.carousel');
         }
      };

   onMounted(() => {
       const modalElement = document.getElementById('videoModal');
         const heroCarouselElement = document.getElementById('carouselExampleFade');

         initReviewsCarousel();

         if (heroCarouselElement && window.bootstrap?.Carousel) {
            heroCarouselInstance = new window.bootstrap.Carousel(heroCarouselElement, {
               interval: 3000,
               ride: 'carousel',
               pause: false,
               touch: true,
               wrap: true,
            });
         }

       if (modalElement) {
           modalElement.addEventListener('hide.bs.modal', handleModalHide);
           modalElement.addEventListener('hidden.bs.modal', handleModalHidden);
       }
   });

   onBeforeUnmount(() => {
       const modalElement = document.getElementById('videoModal');

       if (modalElement) {
           modalElement.removeEventListener('hide.bs.modal', handleModalHide);
           modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
       }

         destroyReviewsCarousel();

          if (heroCarouselInstance) {
                heroCarouselInstance.dispose();
                heroCarouselInstance = null;
          }

       closeVideo();
   });

</script>
<!-- <style scoped>
   @media (min-width: 992px) {
      .cambridge-brand {
         text-align: right;
      }
   }


   @media (max-width: 991.98px) {
      .slider-section {
         padding-top: 1.25rem;
         padding-bottom: 1.75rem;
      }

      .hero-carousel .carousel-item {
         min-height: 260px;
      }

      .hero-carousel-img {
         height: clamp(240px, 70vw, 420px);
      }
   }
   </style> -->
