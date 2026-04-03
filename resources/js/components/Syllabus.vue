<template>
     <div class="row pt-5">
            <!-- Filter Section -->
            <div class="col-12 mb-5">
               <div class="bg-light p-4 rounded shadow-sm">
                  <div class="row g-4">
                     <div class="col-12">
                        <h6 class="fw-bolder text-black mb-3 text-uppercase font-20"  >Select Syllabus</h6>
                        <div class="d-flex flex-wrap gap-2">
                           <input type="checkbox" class="btn-check" id="sylCambridge" value="cambridge" v-model="selectedSyllabus" autocomplete="off">
                           <label class="btn btn-outline-brand-blue rounded-pill px-4 py-2 fw-medium border-2" for="sylCambridge">Cambridge</label>

                           <input type="checkbox" class="btn-check" id="sylEdexcel" value="edexcel" v-model="selectedSyllabus" autocomplete="off">
                           <label class="btn btn-outline-brand-blue rounded-pill px-4 py-2 fw-medium border-2" for="sylEdexcel">Edexcel</label>
                        </div>
                     </div>
                     <div class="col-12">
                        <h6 class="fw-bolder text-black mb-3 text-uppercase font-20">Select Course Type</h6>
                        <div class="d-flex flex-wrap gap-2">
                           <input type="checkbox" class="btn-check" id="course26Theory" value="2026-theory" v-model="selectedCourse" autocomplete="off">
                           <label class="btn btn-outline-brand-charcoal rounded-pill px-4 py-2 fw-medium border-2" for="course26Theory">2026 OL Theory</label>

                           <input type="checkbox" class="btn-check" id="course26Paper" value="2026-paper" v-model="selectedCourse" autocomplete="off">
                           <label class="btn btn-outline-brand-charcoal rounded-pill px-4 py-2 fw-medium border-2" for="course26Paper">2026 OL Paper</label>

                           <input type="checkbox" class="btn-check" id="course27Theory" value="2027-theory" v-model="selectedCourse" autocomplete="off">
                           <label class="btn btn-outline-brand-charcoal rounded-pill px-4 py-2 fw-medium border-2" for="course27Theory">2027 Theory</label>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="col-12">
               <!-- Cambridge Content -->
               <TransitionGroup name="fade-filter">
                  <div key="cambridge" v-if="selectedSyllabus.includes('cambridge')" class="syllabus-section mb-5">
                     <div class="syllabus-content">
                        <h3 class="fw-bold mb-4 text-primary">Cambridge - <span class="text-dark">{{ selectedCourse.map(getCourseLabel).join(', ') }}</span></h3>

                        <!-- 2026 OL Theory Tab -->
                        <Transition name="fade-filter">
                           <div v-if="selectedCourse.includes('2026-theory')" class="syllabus-table-wrap mb-3 shadow-sm rounded-3 p-3 bg-white border">
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
                        </Transition>
                        <!-- 2026 OL Paper Tab -->
                        <Transition name="fade-filter">
                           <div v-if="selectedCourse.includes('2026-paper')" class="syllabus-table-wrap mb-3 shadow-sm rounded-3 p-3 bg-white border">
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
                        </Transition>
                        <!-- 2027 Theory Tab -->
                        <Transition name="fade-filter">
                           <div v-if="selectedCourse.includes('2027-theory')" class="syllabus-table-wrap mb-3 shadow-sm rounded-3 p-3 bg-white border">
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
                     </Transition>
                  </div>
               </div>
               </TransitionGroup>

               <!-- Edexcel Content -->
               <TransitionGroup name="fade-filter">
               <div key="edexcel" v-if="selectedSyllabus.includes('edexcel')" class="syllabus-section mb-5">
                  <div class="syllabus-content">
                     <h3 class="fw-bold mb-4 text-primary">Edexcel - <span class="text-dark">{{ selectedCourse.map(getCourseLabel).join(', ') }}</span></h3>

                     <!-- 2026 Theory Content -->
                     <Transition name="fade-filter">
                        <div v-if="selectedCourse.includes('2026-theory')" class="syllabus-table-wrap mb-3 shadow-sm rounded-3 p-3 bg-white border">
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
                     </Transition>
                     <!-- 2026 Paper Content -->
                     <Transition name="fade-filter">
                     <div v-if="selectedCourse.includes('2026-paper')" class="syllabus-table-wrap mb-3 shadow-sm rounded-3 p-3 bg-white border">
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
                     </Transition>
                     <!-- 2027 Theory Content -->
                     <Transition name="fade-filter">
                     <div v-if="selectedCourse.includes('2027-theory')" class="syllabus-table-wrap mb-3 shadow-sm rounded-3 p-3 bg-white border">
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
                     </Transition>
                  </div>
               </div>
               </TransitionGroup>
            </div>
         </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedSyllabus = ref(['cambridge']);
const selectedCourse = ref(['2026-theory']);

const courseLabels = {
   '2026-theory': '2026 OL Theory',
   '2026-paper': '2026 OL Paper',
   '2027-theory': '2027 Theory',
};

const getCourseLabel = (val) => {
   return courseLabels[val] || val;
};

const resetFilter = () => {
   selectedSyllabus.value = ['cambridge'];
   selectedCourse.value = ['2026-theory'];
};
</script>

<style scoped>
.fade-filter-enter-active,
.fade-filter-leave-active {
  transition: all 0.4s ease;
}
.fade-filter-enter-from,
.fade-filter-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
