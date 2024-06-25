<script setup >
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import ServiceCard from '@/components/Servicecard.vue';
import PriceCard from '@/components/PriceCard.vue';
</script>

<template>
  <GuestLayout>
      <!---------Hero section------------->
        <div class="relative flex w-full  justify-center items-center h-screen   overflow-hidden">
          <div class="w-full h-screen flex justify-start items-center opacity-100 relative z-30 bg-opacity-50">
            <div class="w-1/2 ms-20 " >
             <div class="flex justify-start items-center gap-3">
                <p class="uppercase text-amber-600 font-bold text-2xl">we build, you thrive </p>
                <hr class="w-24 h-1 bg-amber-500 border">
             </div>
               <h1 class="flex uppercase justify-start items-center text-6xl tracking-wide font-black my-10">Building beyond boundaries.</h1>
               <p class="flex justify-start items-center font-normal text-lg text-gray-500 my-5 pe-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda asperiores sit ipsa vero architecto.</p> 
              <div class="flex justify-start items-center gap-5 my-10">
                  <button class="flex uppercase justify-center items-center py-4 px-5 text-white bg-amber-600  hover:bg-black  text-base font-bold gap-2">
                    <p>discover more</p>
                    <svg class="font-semibold " xmlns="http://www.w3.org/2000/svg" width="28"  viewBox="0 0 24 20"><path fill="currentColor" d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"/></svg>
                  </button>
                  <button class="flex uppercase justify-center items-center py-4 px-5 text-black border border-black hover:text-white hover:bg-black  text-base font-bold gap-2">
                    <p>our services</p>
                    <svg class="font-semibold " xmlns="http://www.w3.org/2000/svg" width="28"  viewBox="0 0 24 20"><path fill="currentColor" d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"/></svg>
                  </button>
              </div>
            </div>
            <div class="w-1/2 "></div>
          </div>
          <div class="absolute z-10 max-sm:items-center w-full h-screen" >
            <img src="@/assets/images/img/hero-section.jpg" class="w-full h-full">
          </div>
        </div>
        <!------------servises------------------->
        <div class="mx-20 my-10"> 
          <div class="text-center flex flex-col justify-center items-center">
              <h1 class="font-bold text-4xl uppercase">Services</h1>
              <div class="h-1 bg-amber-400 w-28 mt-px"></div>
         </div> 
          <div class="grid grid-cols-3 gap-5 mt-10">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
          </div>
        </div>
        <!---------Consultation Contact Us------------->
        <div class="relative flex w-full  justify-center items-center h-lvh   overflow-hidden">
          <div class="w-full h-screen mb-10 flex justify-start items-center opacity-100 relative z-30 bg-opacity-50">
            <div class="w-1/3 px-10" >
              <img src="@/assets/images/img/consultion-man.jpg" class="bg-cover">
            </div>
            <div class="w-2/3 ">
                <div class="flex justify-start items-center gap-3">
                  <p class="uppercase text-amber-600 font-bold text-xl">Get consultation </p>
                  <hr class="w-20 h-1 bg-amber-600 ">
                </div>
                <h1 class="text-5xl text-white tracking-widest font-bold my-10 me-20">Get A Free Consultation Contact Us <span class="text-amber-600">!</span></h1>
                <div class="flex justify-start items-center gap-5 my-10">
                    <RouterLink to="/Contact" class="flex uppercase justify-center items-center py-4 px-8 text-white bg-amber-600  hover:bg-white hover:text-black  text-base font-semibold ">
                      <p>contact us</p>
                      <svg class="font-semibold " xmlns="http://www.w3.org/2000/svg" width="28"  viewBox="0 0 24 20"><path fill="currentColor" d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"/></svg>
                    </RouterLink>
                </div>
            </div>
          </div>
          <div class="absolute z-10 max-sm:items-center w-full" >
            <img src="@/assets/images/img/Consultation.jpg" class="w-full h-full">
          </div>
        </div>
        <div class=" h-60 p-10 mx-10 -mt-40  relative z-50 bg-opacity-100 flex justify-center items-center bg-amber-600 ">
            <div class="w-1/4 ps-10">
              <h1 class="font-bold text-6xl  text-white">2k+</h1>
              <p class="text-xl text-white font-normal pt-1">Project Completed</p>
            </div>
            <div class="w-1/4 ps-10">
              <h1 class="font-bold text-6xl text-white">1.5k+</h1>
              <p class="text-xl text-white font-normal pt-1">Customer Satisfied</p>
            </div>
            <div class="w-1/4 ps-10">
              <h1 class="font-bold text-6xl text-white">360+</h1>
              <p class="text-xl text-white font-normal pt-1">Expert Team Members</p>
            </div>
            <div class="w-1/4 ps-10">
              <h1 class="font-bold text-6xl text-white">85+</h1>
              <p class="text-xl font-normal pt-1 text-white ">Awards Winner</p>
            </div>
        </div>
        <!-----------price card----------------->
        <div class="grid grid-cols-3 gap-5 mx-20 my-20">
         <PriceCard/>
         <PriceCard/>
         <PriceCard/>
         <PriceCard/>
        </div>
        <!--------------Portfolio------------------->
        <div class=" pb-5 ">
            <div class="text-center flex flex-col justify-center items-center ">
              <h1 class="font-bold text-4xl uppercase">Our Portfolio</h1>
              <div class="h-1 bg-amber-400 w-40 mt-px"></div>
            </div> 
            <div class="flex justify-center items-center gap-5 mt-5 mx-10">
                <button class="py-2 px-5  bg-green-400 text-white rounded-md shadow-sm uppercase">All</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">Painting</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">Pipe</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">plastring</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">epoxy</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">varnish</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">door-frame</button>
                <button class="py-2 px-5  hover:bg-green-400 hover:text-white text-black rounded-md shadow-sm bg-gray-50 uppercase">Grouting</button>
            </div>
            <div class="grid grid-cols-3 gap-5 mx-20 my-10">
              <div class="max-w-sm bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <RouterLink to="/Portfolio">
                      <img class="rounded-t-lg" src="@/assets/images/img/contact.jpg" alt="" />
                  </RouterLink>
                  <div class="p-2">
                      <RouterLink to="/Portfolio">
                          <h5 class="mb-2 text-2xl font-semibold text-center hover:text-green-400 tracking-tight text-gree dark:text-white">Painting</h5>
                      </RouterLink>
                  </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <RouterLink to="/Portfolio">
                      <img class="rounded-t-lg" src="@/assets/images/img/contact.jpg" alt="" />
                  </RouterLink>
                  <div class="p-2">
                      <RouterLink to="/Portfolio">
                          <h5 class="mb-2 text-2xl font-semibold text-center hover:text-green-400 tracking-tight text-gree dark:text-white">Painting</h5>
                      </RouterLink>
                  </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <RouterLink to="/Portfolio">
                      <img class="rounded-t-lg" src="@/assets/images/img/contact.jpg" alt="" />
                  </RouterLink>
                  <div class="p-2">
                      <RouterLink to="/Portfolio">
                          <h5 class="mb-2 text-2xl font-semibold text-center hover:text-green-400 tracking-tight text-gree dark:text-white">Painting</h5>
                      </RouterLink>
                  </div>
              </div>
            </div>
        </div>
        <!-----------facts---------------->
        <div class="pt-5 pb-14 bg-scroll" style="background-image: url('https://www.premplastering.com/wp-content/themes/migration/images/01-prem-plastering-banner.jpg')">
            <div class="text-center flex flex-col justify-center items-center">
              <h1 class="font-bold text-4xl uppercase">Facts</h1>
              <div class="h-1 bg-green-400 w-20 mt-px"></div>
            </div> 
            <div class=" mx-10 mt-10 relative z-50 bg-opacity-100 flex justify-center items-center">
              <div class="w-1/4 text-center">
                <h1 class="font-bold text-5xl  text-green-400">1471</h1>
                <p class="text-base text-black font-normal pt-1">HDB House</p>
              </div>
              <div class="w-1/4 text-center">
                <h1 class="font-bold text-5xl text-green-400">352</h1>
                <p class="text-base font-normal pt-1">Condo House</p>
              </div>
              <div class="w-1/4 text-center">
                <h1 class="font-bold text-5xl text-green-400">63</h1>
                <p class="text-base  font-normal pt-1">Landed</p>
              </div>
              <div class="w-1/4 text-center">
                <h1 class="font-bold text-5xl text-green-400">17</h1>
                <p class="text-base font-normal pt-1">Corporate</p>
              </div>
          </div>
        </div>
        <!---------contauct us------------>
        <div class=" flex mx-10 gap-20 py-10 ">
             <div class="w-1/2">
                <div class="flex justify-start items-center gap-3">
                  <p class="uppercase text-amber-600 font-semibold ">Get In Touch</p>
                  <hr class="w-14 h-1 bg-amber-600 ">
                </div>
                <h1 class="text-[40px] font-black my-10 ">Have An Upcoming Projects? Let’s Talk to Now!</h1>
                <div class="w-full flex gap-2 my-5">
                    <div class="w-1/2 ">
                      <input type="text" placeholder="Your Name" class=" w-full py-4  bg-gray-100 text-gray-700 border border-gray-300">
                    </div>
                    <div class="w-1/2">
                      <input type="email" placeholder="Email Address" class="w-full py-4  bg-gray-100 text-gray-700 border border-gray-300">
                    </div>
                </div>
                <div class="w-full flex gap-2 my-5">
                  <div class="w-1/2">
                    <input type="number" placeholder="Phone Number" class="w-full py-4 bg-gray-100 text-gray-700 border border-gray-300">
                  </div>
                  <div class="w-1/2">
                    <input type="text" placeholder="Select Subjects" class="w-full py-4  bg-gray-100 text-gray-700 border border-gray-300">
                  </div>
                </div>
                <div class="w-full">
                    <textarea name="" id="" placeholder="Phone Number" rows="5" class="w-full bg-gray-100 text-gray-700 border border-gray-300" ></textarea>
                  </div>
                <div class="flex justify-start items-center gap-5 my-10">
                  <button class="flex uppercase justify-center items-center py-4 px-8 text-white bg-amber-600   hover:bg-black  text-base font-semibold ">
                    <p>Send Mesage</p>
                    <svg class="font-semibold " xmlns="http://www.w3.org/2000/svg" width="28"  viewBox="0 0 24 20"><path fill="currentColor" d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"/></svg>
                  </button>
                </div>
             </div>
             <div class="w-1/2 bg-amber-600">
              <img src="@/assets/images/img/contact.jpg" class="w-full h-full p-5">
             </div>
        </div>
  </GuestLayout>
</template>
