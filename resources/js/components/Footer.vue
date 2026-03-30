<template>

        <div class="container-fluid py-5  bg-brown">
            <div class="container pt-lg-4">
                <div class="row g-4 g-lg-5">
                    <div class="col-lg-4 col-sm-12">
                        <h2 class="text-uppercase font-40 text-white mb-3 fw-normal">
                            CAMDEX EDUCATION
                        </h2>
                        <p class="text-white fw-bolder font-14 mb-4">
                            201 S. Grand Ave., 1st Floor New<br>
                            York City, NY 28020
                        </p>
                        <a href="tel:+17722902999" class="text-white fw-bolder font-14 a-main">+1 (772) 290-2999</a>
                    </div>

                    <div class="col-lg-3 col-sm-4">
                        <h5 class="text-uppercase font-18 text-white  fw-bolder py-2">MAIN NAVIGATION</h5>
                        <ul class="footer-list mt-3">
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="/">Home</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="/about">About</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Academics</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Admission</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Student Life</a></li>
                        </ul>
                    </div>

                         <div class="col-lg-3 col-sm-4">
                        <h5 class="text-uppercase font-18 text-white  fw-bolder py-2">INFORMATION FOR</h5>
                        <ul class="footer-list mt-3">
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">How To Apply</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Dates &amp; Deadlines</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Student Activities</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Support &amp; Guidance</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Schedule A Tour</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 col-sm-4">
                        <h5 class="text-uppercase font-18 text-white  fw-bolder py-2">QUICK LINKS</h5>
                        <ul class="footer-list mt-3">
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Apply Now</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Blog</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Teachers</a></li>
                            <li class="pb-2"><a class="text-white fw-bolder font-14 a-main" href="#">Alumni Club</a></li>
                        </ul>
                    </div>
                </div>


                <div class="row">
                    <div class="col-12">
                        <div class=" d-flex justify-content-center flex-wrap gap-5  mt-5">
                    <a href="#"  aria-label="Facebook" class="text-white fs-5">
                        <i class="fa-brands fa-facebook-f hvr-shrink" aria-hidden="true"></i>
                    </a>
                    <a href="#" aria-label="Twitter" class="text-white fs-5">
                        <i class="fa-brands fa-x-twitter hvr-shrink" aria-hidden="true"></i>
                    </a>
                    <a href="#" aria-label="LinkedIn" class="text-white fs-5">
                        <i class="fa-brands fa-linkedin-in hvr-shrink" aria-hidden="true"></i>
                    </a>
                    <a href="#" aria-label="YouTube" class="text-white fs-5">
                        <i class="fa-brands fa-youtube hvr-shrink" aria-hidden="true"></i>
                    </a>
                    <a href="#" aria-label="Instagram" class="text-white fs-5">
                        <i class="fa-brands fa-instagram hvr-shrink" aria-hidden="true"></i>
                    </a>
                </div>
                    </div>
                </div>

            </div>
        </div>

       <div class="footer-bottom py-3">
            <div class="container">
                <div class="row align-items-center g-3">
                    <div class="col-lg-6 text-center text-lg-start">
                        <p class="text-dark font-14 fw-normal">Copyright © {{ currentYear }} VamTam. All rights reserved.</p>
                    </div>
                    <div class="col-lg-6">
                        <ul class="bottom-links d-flex justify-content-center justify-content-lg-end gap-3 gap-md-5 mb-0">
                            <li class="pb-2"><a href="#" class="text-dark font-14 a-main fw-normal text-dark">Cookies</a></li>
                            <li class="pb-2"><a href="#" class="text-dark font-14 a-main fw-normal">Terms &amp; Conditions</a></li>
                            <li class="pb-2"><a href="#" class="text-dark font-14 a-main fw-normal">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
