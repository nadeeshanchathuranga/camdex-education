<template>

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
                           <button type="button" class="syllabus-year-pill mb-0 mt-0 border-0" :class="{'active-pill': activeCambridgeYear === '2026-theory'}" @click="activeCambridgeYear = '2026-theory'">2026 OL Theory</button>
                           <button type="button" class="syllabus-year-pill mb-0 mt-0 border-0" :class="{'active-pill': activeCambridgeYear === '2026-paper'}" @click="activeCambridgeYear = '2026-paper'">2026 OL Paper</button>
                           <button type="button" class="syllabus-year-pill mb-0 mt-0 border-0" :class="{'active-pill': activeCambridgeYear === '2027-theory'}" @click="activeCambridgeYear = '2027-theory'">2027 Theory</button>
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
</template>

<script setup>
import { ref } from 'vue';


const openSyllabusSection = ref('cambridge');
const activeCambridgeYear = ref('2026-theory');
const activeEdexcelYear = ref('2026-theory');

const toggleSyllabus = (section) => {
   openSyllabusSection.value = openSyllabusSection.value === section ? '' : section;
};
</script>
