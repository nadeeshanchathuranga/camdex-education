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
                  About Camdex Education.
               </h1>
               <p class="fw-normal font-18 text-dark">
                  At Camdex Education, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn  practical skills, build a network of industry contacts, and gain  real-world experience. You’ll have the opportunity to generate  innovative design and business solutions.
               </p>
               <p class="pt-4"><a href="" class="text-dark fw-normal font-16 hvr-forward"><u>Institute Overview</u></a></p>
            </div>
         </div>
         <div id="instructors" class="row ">
            <div class="col-12 pt-5">
               <h2 class="font-48 fw-bolder text-center text-black pb-4">
                  Instructors Directory.
               </h2>
            </div>
            <div ref="instructorsCarousel" class="row instructors-grid">
               <div class="col-lg-4 col-sm-12 pb-lg-5">
                  <article class="instructor-flip-card">
                     <div class="instructor-flip-card-inner">
                        <div class="instructor-flip-front">
                           <img :src="'/images/d1.png'" class="w-100" alt="Camdex Education">
                        </div>
                        <div class="instructor-flip-back p-5">
                           <p class="font-16 fw-normal text-white pb-3">Franklin Doyle is an elected Fellow of the Academy of Behavioral Psychology Research, the premier honorary organization for scientists working at the interface of behavior and medicine, and he has been appointed to serve on two consensus committees at the Estudia Academies of Sciences, Engineering, and Medicine.
                              Outside of the academy, Doyle's research has been cited in several amicus curiae briefs.
                           </p>
                           <p class="font-16 fw-normal text-white pb-3 pt-4">Contacts:</p>
                           <p class="font-14 text-white fw-normal pb-2"><i class="fa-solid fa-phone pe-2"></i><a href="tel:110-220-331" class="text-white text-decoration-underline">110-220-331</a></p>
                           <p class="font-14 text-white fw-normal"><i class="fa-regular fa-envelope pe-2"></i><a href="mailto:franklin.doyle@email.com" class="text-white text-decoration-underline">franklin.doyle@email.com</a></p>
                        </div>
                     </div>
                  </article>
                  <h3 class="fw-bold font-30 pt-4 pb-3 text-dark">
                     Instructors Name
                  </h3>
                  <p class="font-20 text-dark fw-normal ">Lecture</p>
               </div>
               <div class="col-lg-4 col-sm-12 pb-lg-5">
                  <article class="instructor-flip-card">
                     <div class="instructor-flip-card-inner">
                        <div class="instructor-flip-front">
                           <img :src="'/images/d1.png'" class="w-100" alt="Camdex Education">
                        </div>
                        <div class="instructor-flip-back p-5">
                           <p class="font-16 fw-normal text-white pb-3">Franklin Doyle is an elected Fellow of the Academy of Behavioral Psychology Research, the premier honorary organization for scientists working at the interface of behavior and medicine, and he has been appointed to serve on two consensus committees at the Estudia Academies of Sciences, Engineering, and Medicine.
                              Outside of the academy, Doyle's research has been cited in several amicus curiae briefs.
                           </p>
                           <p class="font-16 fw-normal text-white pb-3 pt-4">Contacts:</p>
                           <p class="font-14 text-white fw-normal pb-2"><i class="fa-solid fa-phone pe-2"></i><a href="tel:110-220-331" class="text-white text-decoration-underline">110-220-331</a></p>
                           <p class="font-14 text-white fw-normal"><i class="fa-regular fa-envelope pe-2"></i><a href="mailto:franklin.doyle@email.com" class="text-white text-decoration-underline">franklin.doyle@email.com</a></p>
                        </div>
                     </div>
                  </article>
                  <h3 class="fw-bold font-30 pt-4 pb-3 text-dark">
                     Instructors Name
                  </h3>
                  <p class="font-20 text-dark fw-normal ">Lecture</p>
               </div>
               <div class="col-lg-4 col-sm-12 pb-lg-5">
                  <article class="instructor-flip-card">
                     <div class="instructor-flip-card-inner">
                        <div class="instructor-flip-front">
                           <img :src="'/images/d1.png'" class="w-100" alt="Camdex Education">
                        </div>
                        <div class="instructor-flip-back p-5">
                           <p class="font-16 fw-normal text-white pb-3">Franklin Doyle is an elected Fellow of the Academy of Behavioral Psychology Research, the premier honorary organization for scientists working at the interface of behavior and medicine, and he has been appointed to serve on two consensus committees at the Estudia Academies of Sciences, Engineering, and Medicine.
                              Outside of the academy, Doyle's research has been cited in several amicus curiae briefs.
                           </p>
                           <p class="font-16 fw-normal text-white pb-3 pt-4">Contacts:</p>
                           <p class="font-14 text-white fw-normal pb-2"><i class="fa-solid fa-phone pe-2"></i><a href="tel:110-220-331" class="text-white text-decoration-underline">110-220-331</a></p>
                           <p class="font-14 text-white fw-normal"><i class="fa-regular fa-envelope pe-2"></i><a href="mailto:franklin.doyle@email.com" class="text-white text-decoration-underline">franklin.doyle@email.com</a></p>
                        </div>
                     </div>
                  </article>
                  <h3 class="fw-bold font-30 pt-4 pb-3 text-dark">
                     Instructors Name
                  </h3>
                  <p class="font-20 text-dark fw-normal ">Lecture</p>
               </div>
               <div class="col-lg-4 col-sm-12 pb-lg-5">
                  <article class="instructor-flip-card">
                     <div class="instructor-flip-card-inner">
                        <div class="instructor-flip-front">
                           <img :src="'/images/d1.png'" class="w-100" alt="Camdex Education">
                        </div>
                        <div class="instructor-flip-back p-5">
                           <p class="font-16 fw-normal text-white pb-3">Franklin Doyle is an elected Fellow of the Academy of Behavioral Psychology Research, the premier honorary organization for scientists working at the interface of behavior and medicine, and he has been appointed to serve on two consensus committees at the Estudia Academies of Sciences, Engineering, and Medicine.
                              Outside of the academy, Doyle's research has been cited in several amicus curiae briefs.
                           </p>
                           <p class="font-16 fw-normal text-white pb-3 pt-4">Contacts:</p>
                           <p class="font-14 text-white fw-normal pb-2"><i class="fa-solid fa-phone pe-2"></i><a href="tel:110-220-331" class="text-white text-decoration-underline">110-220-331</a></p>
                           <p class="font-14 text-white fw-normal"><i class="fa-regular fa-envelope pe-2"></i><a href="mailto:franklin.doyle@email.com" class="text-white text-decoration-underline">franklin.doyle@email.com</a></p>
                        </div>
                     </div>
                  </article>
                  <h3 class="fw-bold font-30 pt-4 pb-3 text-dark">
                     Instructors Name
                  </h3>
                  <p class="font-20 text-dark fw-normal ">Lecture</p>
               </div>
               <div class="col-lg-4 col-sm-12 pb-lg-5">
                  <article class="instructor-flip-card">
                     <div class="instructor-flip-card-inner">
                        <div class="instructor-flip-front">
                           <img :src="'/images/d1.png'" class="w-100" alt="Camdex Education">
                        </div>
                        <div class="instructor-flip-back p-5">
                           <p class="font-16 fw-normal text-white pb-3">Franklin Doyle is an elected Fellow of the Academy of Behavioral Psychology Research, the premier honorary organization for scientists working at the interface of behavior and medicine, and he has been appointed to serve on two consensus committees at the Estudia Academies of Sciences, Engineering, and Medicine.
                              Outside of the academy, Doyle's research has been cited in several amicus curiae briefs.
                           </p>
                           <p class="font-16 fw-normal text-white pb-3 pt-4">Contacts:</p>
                           <p class="font-14 text-white fw-normal pb-2"><i class="fa-solid fa-phone pe-2"></i><a href="tel:110-220-331" class="text-white text-decoration-underline">110-220-331</a></p>
                           <p class="font-14 text-white fw-normal"><i class="fa-regular fa-envelope pe-2"></i><a href="mailto:franklin.doyle@email.com" class="text-white text-decoration-underline">franklin.doyle@email.com</a></p>
                        </div>
                     </div>
                  </article>
                  <h3 class="fw-bold font-30 pt-4 pb-3 text-dark">
                     Instructors Name
                  </h3>
                  <p class="font-20 text-dark fw-normal ">Lecture</p>
               </div>
               <div class="col-lg-4 col-sm-12 pb-lg-5">
                  <article class="instructor-flip-card">
                     <div class="instructor-flip-card-inner">
                        <div class="instructor-flip-front">
                           <img :src="'/images/d1.png'" class="w-100" alt="Camdex Education">
                        </div>
                        <div class="instructor-flip-back p-5">
                           <p class="font-16 fw-normal text-white pb-3">Franklin Doyle is an elected Fellow of the Academy of Behavioral Psychology Research, the premier honorary organization for scientists working at the interface of behavior and medicine, and he has been appointed to serve on two consensus committees at the Estudia Academies of Sciences, Engineering, and Medicine.
                              Outside of the academy, Doyle's research has been cited in several amicus curiae briefs.
                           </p>
                           <p class="font-16 fw-normal text-white pb-3 pt-4">Contacts:</p>
                           <p class="font-14 text-white fw-normal pb-2"><i class="fa-solid fa-phone pe-2"></i><a href="tel:110-220-331" class="text-white text-decoration-underline">110-220-331</a></p>
                           <p class="font-14 text-white fw-normal"><i class="fa-regular fa-envelope pe-2"></i><a href="mailto:franklin.doyle@email.com" class="text-white text-decoration-underline">franklin.doyle@email.com</a></p>
                        </div>
                     </div>
                  </article>
                  <h3 class="fw-bold font-30 pt-4 pb-3 text-dark">
                     Instructors Name
                  </h3>
                  <p class="font-20 text-dark fw-normal ">Lecture</p>
               </div>
            </div>
         </div>


         <div id="faq" class="row pt-5">
<div class="col-12  "><h2 class="font-48 fw-bolder text-center text-black pb-4">Make a Tour. </h2>
<p class="fw-normal font-18 text-dark">Choose your onboard grade to access instructors’ free lessons. Selecting the correct grade ensures the content matches your current knowledge level. These lessons help you understand basic concepts, build confidence, and experience the teaching style. Use this opportunity to learn step by step and prepare yourself for more advanced topics ahead </p>




</div>

         </div>


         <div class="row pt-5">
            <div class="col-12">
               <div class="syllabus-section">
                  <div class="syllabus-group ">
                     <button type="button" class="syllabus-toggle border-bottom pb-3" @click="toggleSyllabus('cambridge')" :aria-expanded="openSyllabusSection === 'cambridge'">
                        <span>CAMBRIDGE</span>
                        <i :class="openSyllabusSection === 'cambridge' ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'"></i>
                     </button>

                     <div v-if="openSyllabusSection === 'cambridge'" class="syllabus-content pt-4">
                        <div class="d-flex flex-wrap gap-2 gap-md-3 mb-4">
                           <button type="button" class="syllabus-year-pill mb-0 mt-0" :class="{'active-pill': activeCambridgeYear === '2026-theory'}" @click="activeCambridgeYear = '2026-theory'">2026 OL Theory</button>
                           <button type="button" class="syllabus-year-pill mb-0 mt-0" :class="{'active-pill': activeCambridgeYear === '2026-paper'}" @click="activeCambridgeYear = '2026-paper'">2026 OL Paper</button>
                           <button type="button" class="syllabus-year-pill mb-0 mt-0" :class="{'active-pill': activeCambridgeYear === '2027-theory'}" @click="activeCambridgeYear = '2027-theory'">2027 Theory</button>
                        </div>

                        <!-- 2026 OL Theory Tab -->
                        <div v-if="activeCambridgeYear === '2026-theory'" class="syllabus-table-wrap mb-3 animation-fade-in">
                           <h5 class="fw-bold font-20 text-dark mb-3">General Subjects (2026 OL Theory)</h5>
                          <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Mathematics</td>
                                    <td>Devin Senatilleke</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Mathematics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec A</td>
                                    <td>Saleemah Mohideen</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge English Spec A lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec B</td>
                                    <td>Dimitri Cooray</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge English Spec B lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>ICT</td>
                                    <td>Qaidh Sinnalebbe</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge ICT lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Computer Science</td>
                                    <td>Yusuf Shiham</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Computer Science lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>

                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Science Subjects (2026 OL Theory)</h5>

<div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Chemistry</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Chemistry lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Physics</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Physics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Biology</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Biology lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Business Subjects (2026 OL Theory)</h5>

                       <div class="table-responsive">
                           <table class="table syllabus-table mb-0">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Business</td>
                                    <td>Prasanna Sanjeewa</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Business lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Accounting</td>
                                    <td>Heshan Kodagoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Accounting lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Economics</td>
                                    <td>Haani Nihal</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Economics lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>

                        </div>
                        </div>

                        <!-- 2026 OL Paper Tab -->
                        <div v-if="activeCambridgeYear === '2026-paper'" class="syllabus-table-wrap mb-3 animation-fade-in">
                           <h5 class="fw-bold font-20 text-dark mb-3">General Subjects (2026 OL Paper)</h5>
                           <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Mathematics</td>
                                    <td>Devin Senatilleke</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Mathematics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec A</td>
                                    <td>Saleemah Mohideen</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge English Spec A lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec B</td>
                                    <td>Dimitri Cooray</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge English Spec B lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>ICT</td>
                                    <td>Qaidh Sinnalebbe</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge ICT lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Computer Science</td>
                                    <td>Yusuf Shiham</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Computer Science lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Science Subjects (2026 OL Paper)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Chemistry</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Chemistry lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Physics</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Physics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Biology</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Biology lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Business Subjects (2026 OL Paper)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-0">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Business</td>
                                    <td>Prasanna Sanjeewa</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Business lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Accounting</td>
                                    <td>Heshan Kodagoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Accounting lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Economics</td>
                                    <td>Haani Nihal</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Economics lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        </div>

                        <!-- 2027 Theory Tab -->
                        <div v-if="activeCambridgeYear === '2027-theory'" class="syllabus-table-wrap mb-3 animation-fade-in">
                           <h5 class="fw-bold font-20 text-dark mb-3">General Subjects (2027 Theory)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Mathematics</td>
                                    <td>Devin Senatilleke</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Mathematics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec A</td>
                                    <td>Saleemah Mohideen</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge English Spec A lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec B</td>
                                    <td>Dimitri Cooray</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge English Spec B lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>ICT</td>
                                    <td>Qaidh Sinnalebbe</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge ICT lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Computer Science</td>
                                    <td>Yusuf Shiham</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Computer Science lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Science Subjects (2027 Theory)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Chemistry</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Chemistry lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Physics</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Physics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Biology</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Biology lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Business Subjects (2027 Theory)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-0">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Business</td>
                                    <td>Prasanna Sanjeewa</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Business lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Accounting</td>
                                    <td>Heshan Kodagoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Accounting lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Economics</td>
                                    <td>Haani Nihal</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Cambridge Economics lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        </div>
                     </div>
                  </div>

                  <div class="syllabus-group">
                     <button type="button" class="syllabus-toggle border-bottom pb-3" @click="toggleSyllabus('edexcel')" :aria-expanded="openSyllabusSection === 'edexcel'">
                        <span>EDEXCEL</span>
                        <i :class="openSyllabusSection === 'edexcel' ? 'fa-solid fa-angle-up' : 'fa-solid fa-angle-down'"></i>
                     </button>

                     <div v-if="openSyllabusSection === 'edexcel'" class="syllabus-content pt-4">
                        <div class="d-flex flex-wrap gap-2 gap-md-3 mb-4">
                           <button class="syllabus-year-pill mb-0 mt-0 border-0" :class="{ 'active-pill': activeEdexcelYear === '2026-theory' }" @click="activeEdexcelYear = '2026-theory'">2026 OL Theory</button>
                           <button class="syllabus-year-pill mb-0 mt-0 border-0" :class="{ 'active-pill': activeEdexcelYear === '2026-paper' }" @click="activeEdexcelYear = '2026-paper'">2026 OL Paper</button>
                           <button class="syllabus-year-pill mb-0 mt-0 border-0" :class="{ 'active-pill': activeEdexcelYear === '2027-theory' }" @click="activeEdexcelYear = '2027-theory'">2027 Theory</button>
                        </div>

                        <!-- 2026 Theory Content -->
                        <div v-if="activeEdexcelYear === '2026-theory'" class="syllabus-table-wrap mb-3">
                           <h5 class="fw-bold font-20 text-dark mb-3">General Subjects (2026 OL Theory)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Mathematics</td>
                                    <td>Devin Senatilleke</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Mathematics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec A</td>
                                    <td>Saleemah Mohideen</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel English Spec A lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec B</td>
                                    <td>Dimitri Cooray</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel English Spec B lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>ICT</td>
                                    <td>Qaidh Sinnalebbe</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel ICT lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Computer Science</td>
                                    <td>Yusuf Shiham</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Computer Science lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Science Subjects (2026 OL Theory)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Chemistry</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Chemistry lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Physics</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Physics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Biology</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Biology lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Business Subjects (2026 OL Theory)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-0">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Business</td>
                                    <td>Prasanna Sanjeewa</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Business lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Accounting</td>
                                    <td>Heshan Kodagoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Accounting lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Economics</td>
                                    <td>Haani Nihal</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Economics lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        </div>

                        <!-- 2026 Paper Content -->
                        <div v-if="activeEdexcelYear === '2026-paper'" class="syllabus-table-wrap mb-3">
                           <h5 class="fw-bold font-20 text-dark mb-3">General Subjects (2026 OL Paper)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Mathematics</td>
                                    <td>Devin Senatilleke</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Mathematics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec A</td>
                                    <td>Saleemah Mohideen</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel English Spec A lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec B</td>
                                    <td>Dimitri Cooray</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel English Spec B lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>ICT</td>
                                    <td>Qaidh Sinnalebbe</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel ICT lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Computer Science</td>
                                    <td>Yusuf Shiham</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Computer Science lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Science Subjects (2026 OL Paper)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Chemistry</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Chemistry lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Physics</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Physics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Biology</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Biology lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Business Subjects (2026 OL Paper)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-0">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Business</td>
                                    <td>Prasanna Sanjeewa</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Business lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Accounting</td>
                                    <td>Heshan Kodagoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Accounting lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Economics</td>
                                    <td>Haani Nihal</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Economics lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        </div>

                        <!-- 2027 Theory Content -->
                        <div v-if="activeEdexcelYear === '2027-theory'" class="syllabus-table-wrap mb-3">
                           <h5 class="fw-bold font-20 text-dark mb-3">General Subjects (2027 Theory)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Mathematics</td>
                                    <td>Devin Senatilleke</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Mathematics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec A</td>
                                    <td>Saleemah Mohideen</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel English Spec A lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>English Spec B</td>
                                    <td>Dimitri Cooray</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel English Spec B lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>ICT</td>
                                    <td>Qaidh Sinnalebbe</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel ICT lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Computer Science</td>
                                    <td>Yusuf Shiham</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Computer Science lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Science Subjects (2027 Theory)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-4">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Chemistry</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Chemistry lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Physics</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Physics lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Biology</td>
                                    <td>Shehan Moragoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Biology lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
</div>
                           <h5 class="fw-bold font-20 text-dark mb-3 pt-3">Business Subjects (2027 Theory) (2027 Theory)</h5>
                            <div class="table-responsive">
                           <table class="table syllabus-table mb-0">
                              <thead>
                                 <tr>
                                    <th>Subject</th>
                                    <th>Tutor</th>
                                    <th>Watch Link</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>Business</td>
                                    <td>Prasanna Sanjeewa</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Business lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Accounting</td>
                                    <td>Heshan Kodagoda</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Accounting lesson</a></td>
                                 </tr>
                                 <tr>
                                    <td>Economics</td>
                                    <td>Haani Nihal</td>
                                    <td><a href="#" class="text-secondary"><i class="fa-brands fa-youtube text-danger me-2"></i>Click here to watch the 1st IGCSE Edexcel Economics lesson</a></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                        </div>
                     </div>
                  </div>
                </div>
            </div>
         </div>



      </div>





      <div class="container-fluid">
        <div class="container">
            <div class="row ">
            <div class="col-12">
               <section id="apply-now" class="apply-now-section py-4 py-lg-5">
                  <h2 class="font-172 fw-bold text-dark text-center pb-3">APPLY NOW</h2>

         <div class="row align-items-center border-bottom border-3 border-top-0 border-end-0 border-start-0 border-secondary pb-4 mx-lg-3 my-5">
                    <div class="col-2"><p class="fw-bold font-20 text-dark">01</p></div>
                    <div class="col-lg-3 col-7"><p class="fw-bold font-20 text-dark">You Apply</p></div>
                    <div class="col-lg-7 col-12 pt-lg-0 pt-2">
                        <p class="fw-normal font-18 text-dark">Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete.</p>
                    </div>
                  </div>



<div class="row align-items-center border-bottom border-3 border-top-0 border-end-0 border-start-0 border-secondary pb-4 mx-lg-3 my-5">
                    <div class="col-2"><p class="fw-bold font-20 text-dark">02</p></div>
                    <div class="col-lg-3 col-7"><p class="fw-bold font-20 text-dark">We Connect</p></div>
                    <div class="col-lg-7 col-12 pt-lg-0 pt-2">
                        <p class="fw-normal font-18 text-dark">After you submit your application, an admissions representative will contact you and will help you to complete the process.</p>
                    </div>
                  </div>





<div class="row align-items-center border-bottom border-3 border-top-0 border-end-0 border-start-0 border-secondary pb-4 mx-lg-3 my-5">
                    <div class="col-2"><p class="fw-bold font-20 text-dark">03</p></div>
                    <div class="col-lg-3 col-7"><p class="fw-bold font-20 text-dark">You Get Ready</p></div>
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

   <div id="class-fees" class="container-fluid tution-fees-section px-lg-0">
      <div class="row ">
         <div class="col-lg-6 bg-brand-blue p-5 tution-fees-row">
            <div class="row py-lg-5">
               <div class="col-lg-8 mx-auto py-lg-5">
                  <h2 class="font-48 text-white fw-bolder pb-4">Tuition & Fees</h2>
                  <p class="fw-normal font-16 text-white">This new plan is designed to reduce the average cost of a Make School Education while preserving the core protections of ISAs – if you don’t have a job after Make School, you should not have to pay until you are employed.</p>
                  <p class="pt-4 pb-5"><a href="" class="text-white fw-normal font-16 hvr-forward"><u>Details Plane</u></a></p>
               </div>
            </div>
         </div>
         <div class="col-lg-6 bg-light-dark py-5 tution-fees-row">
            <div class="row justify-content-center pt-5 left-3em g-4">
               <div class="col-lg-6 col-sm-6">
                  <div class="bg-white p-lg-5 py-5 px-3 card-1">
                     <h4 class="font-18 fw-bolder text-dark mb-4 pt-3">Addmission Fees</h4>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Fall 2020</span>
                        <span class="font-16 fw-bolder text-dark">$15,000</span>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Spring 2021</span>
                        <span class="font-16 fw-bolder text-dark">$15,000</span>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Summer 2021</span>
                        <span class="font-16 fw-bolder text-dark">$10,000</span>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Fall 2021</span>
                        <span class="font-16 fw-bolder text-dark">$15,000</span>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Spring 2022</span>
                        <span class="font-16 fw-bolder text-dark">$15,000</span>
                     </div>
                     <hr class="my-4">
                     <div class="d-flex justify-content-between align-items-center">
                        <span class="font-16 fw-bolder text-dark">TOTAL</span>
                        <span class="font-16 fw-bolder text-dark">$75,000</span>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6 col-sm-6">
                  <div class="bg-white p-lg-5 py-5 px-3 card-1">
                     <h4 class="font-18 fw-bolder text-dark mb-4 pt-3">Class Fees</h4>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Fall 2020</span>
                        <span class="font-16 fw-bolder text-dark">$15,000</span>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Spring 2021</span>
                        <span class="font-16 fw-bolder text-dark">$15,000</span>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Summer 2021</span>
                        <span class="font-16 fw-bolder text-dark">$10,000</span>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Fall 2021</span>
                        <span class="font-16 fw-bolder text-dark">$15,000</span>
                     </div>
                     <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="font-16 fw-bolder text-dark">Spring 2022</span>
                        <span class="font-16 fw-bolder text-dark">$15,000</span>
                     </div>
                     <hr class="my-4">
                     <div class="d-flex justify-content-between align-items-center">
                        <span class="font-16 fw-bolder text-dark">TOTAL</span>
                        <span class="font-16 fw-bolder text-dark">$75,000</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
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
   <div id="join-us" class="container-fluid form-section py-5">
      <div class="container">
         <div class="row justify-content-center text-center">
            <div class="col-lg-10 col-xl-8">
               <h2 class="font-172 fw-bold text-dark mt8">
                  FORM
               </h2>
               <p class="font-16 fw-bolder text-dark ">
                  Are you ready to take the next step toward your future career?
               </p>
               <div class="row py-5">
                  <div class="col-lg-6 col-sm-7 col-10 mx-auto">
                     <a href="#" class="hvr-icon-forward bg-dark p-4 w-100 rounded-0 d-inline-flex align-items-center justify-content-between text-white fw-bolder font-24">
                     Application Form
                     <i class="fa-solid fa-arrow-right hvr-icon ms-auto"></i>
                     </a>
                  </div>
               </div>
               <div class="quick-links d-flex justify-content-center align-items-center gap-3 gap-md-4">
                  <a href="#" class="text-dark font-18 fw-bolder a-main">Request Info</a>
                  <span class="divider text-dark" aria-hidden="true"></span>
                  <a href="#" class="text-dark font-18 fw-bolder a-main">Visit</a>
               </div>
            </div>
         </div>
      </div>
   </div>
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

   const activeVideoLink = ref('');
   const validationMessage = ref('');
   const reviewsCarousel = ref(null);
   const instructorsCarousel = ref(null);
   const openSyllabusSection = ref('cambridge');
   const activeCambridgeYear = ref('2026-theory');
   const activeEdexcelYear = ref('2026-theory');
   let heroCarouselInstance = null;
   let handleWindowResize = null;

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

      const toggleSyllabus = (section) => {
         openSyllabusSection.value = openSyllabusSection.value === section ? '' : section;
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

      const initInstructorsCarousel = () => {
         const $ = window.jQuery || window.$;

         if (!$ || !instructorsCarousel.value || !$.fn || !$.fn.owlCarousel) {
            return;
         }

         const isSliderViewport = window.innerWidth <= 991;
         const $carousel = $(instructorsCarousel.value);

         if (!isSliderViewport) {
            if ($carousel.hasClass('owl-loaded')) {
               $carousel.trigger('destroy.owl.carousel');
            }
            $carousel.removeClass('owl-carousel');
            return;
         }

         if (!$carousel.hasClass('owl-carousel')) {
            $carousel.addClass('owl-carousel');
         }

         if ($carousel.hasClass('owl-loaded')) {
            return;
         }

         $carousel.owlCarousel({
            items: 1,
            margin: 16,
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3200,
            autoplayHoverPause: true,
            navText: [
               '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
               '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
            ],
            smartSpeed: 600,
            responsive: {
               0: { items: 1 },
               768: { items: 2 },
            },
         });
      };

      const destroyInstructorsCarousel = () => {
         const $ = window.jQuery || window.$;

         if (!$ || !instructorsCarousel.value || !$.fn || !$.fn.owlCarousel) {
            return;
         }

         const $carousel = $(instructorsCarousel.value);

         if ($carousel.hasClass('owl-loaded')) {
            $carousel.trigger('destroy.owl.carousel');
         }

         $carousel.removeClass('owl-carousel');
      };

   onMounted(() => {
       const modalElement = document.getElementById('videoModal');
         const heroCarouselElement = document.getElementById('carouselExampleFade');

         initReviewsCarousel();
         initInstructorsCarousel();

         handleWindowResize = () => {
            initInstructorsCarousel();
         };

         window.addEventListener('resize', handleWindowResize);

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
         destroyInstructorsCarousel();

         if (handleWindowResize) {
            window.removeEventListener('resize', handleWindowResize);
            handleWindowResize = null;
         }

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
