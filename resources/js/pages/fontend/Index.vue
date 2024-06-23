<script setup >
import GuestLayout from '@/components/Layouts/GuestLayout.vue';
import ServiceCard from '@/components/Servicecard.vue';
import Portfolio from '@/components/PortfolioCard.vue';
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
              <div class="h-1 bg-green-400 w-28 mt-px"></div>
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
                    <button class="flex uppercase justify-center items-center py-4 px-8 text-white bg-amber-600  hover:bg-white hover:text-black  text-base font-semibold ">
                      <p>contact us</p>
                      <svg class="font-semibold " xmlns="http://www.w3.org/2000/svg" width="28"  viewBox="0 0 24 20"><path fill="currentColor" d="m16.289 7.208l-9.766 9.746q-.14.14-.344.13q-.204-.009-.345-.15t-.14-.334t.14-.334L15.582 6.5H6.789q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h9.692q.343 0 .575.232t.233.576V16q0 .213-.145.356t-.356.144t-.356-.144t-.144-.356z"/></svg>
                    </button>
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
          <div class="bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col px-5  justify-center items-center w-full h-40 bg-amber-400">
              <h5 class="mb-2 text-4xl font-bold text-white dark:text-gray-400 ">Painting</h5>
              <p class="text-white text-center font-normal text-base">House & Commercial space Painting</p>
            </div>
          <div class="flex justify-center items-center pt-5  text-gray-900 dark:text-white">
            <span class="text-3xl me-2 font-bold">$</span>
            <span class="text-4xl font-extrabold tracking-tight me-2">280</span>
            <span class="ms-1 text-3xl font-bold text-black dark:text-gray-400">/ start</span>
            </div>
            <ul role="list" class="space-y-5 my-7  flex flex-col justify-center items-center ">
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">2 Rm HDB <span class="px-1">-</span> $499 <span class="px-1">to</span>$999</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">3 Rm HDB <span class="px-1">-</span> $599 <span class="px-1">to</span>$1199</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">4 Rm HDB <span class="px-1">-</span> $699 <span class="px-1">to</span>$1349</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">5 Rm HDB <span class="px-1">-</span> $899 <span class="px-1">to</span>$1450</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">Executive Apartment <span class="px-1">-</span> $999 <span class="px-1">to</span>$1550</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">Executive Mansionette <span class="px-1">-</span> $1249 <span class="px-1">to</span>$1900</p>
              </li>
            </ul>
            <div class="flex justify-center items-center">
              <button type="button" class="text-white w-60 my-5 bg-amber-400 font-medium  text-base px-5 py-3 inline-flex justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38"/><stop offset="100%" stop-color="#60D669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9"/><stop offset="100%" stop-color="#FFF"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
                Whats App Please
              </button>
            </div>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-col px-5  justify-center items-center w-full h-40 bg-[#4dbdbe]">
              <h5 class="mb-2 text-4xl font-bold text-white dark:text-gray-400 ">Plastaring</h5>
              <p class="text-white text-center font-normal text-base">Only Plastaring Price</p>
            </div>
          <div class="flex justify-center items-center pt-5  text-gray-900 dark:text-white">
            <span class="text-3xl me-2 font-bold">$</span>
            <span class="text-4xl font-extrabold tracking-tight me-2">600<span class="px-px">to</span>800</span>
            <span class="ms-1 text-3xl font-bold text-black dark:text-gray-400">/ start</span>
            </div>
            <ul role="list" class="space-y-5 my-7  flex flex-col justify-center items-center ">
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">2 Rm HDB <span class="px-1">-</span> $1500 <span class="px-1">to</span>$2000</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">3 Rm HDB <span class="px-1">-</span> $1900 <span class="px-1">to</span>$2500</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">4 Rm HDB <span class="px-1">-</span> $2400 <span class="px-1">to</span>$3000</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">5 Rm HDB <span class="px-1">-</span> $3000 <span class="px-1">to</span>$3500</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">Executive Apartment <span class="px-1">-</span> $3600 <span class="px-1">to</span>$4200</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">Executive Mansionette <span class="px-1">-</span> $4300 <span class="px-1">to</span>$5600</p>
              </li>
            </ul>
            <div class="flex justify-center items-center">
              <button type="button" class="text-white w-60 my-5 bg-[#4dbdbe] font-medium  text-base px-5 py-3 inline-flex justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38"/><stop offset="100%" stop-color="#60D669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9"/><stop offset="100%" stop-color="#FFF"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
                Whats App Please
              </button>
            </div>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div class="flex px-5  flex-col justify-center items-center w-full h-40 bg-[#3db7e8]">
              <h5 class="mb-2 text-4xl font-bold text-white dark:text-gray-400 ">Polishing</h5>
              <p class="text-white text-center font-normal text-base">Marble Polish,Parquet polish,Tiles floor polish </p>
            </div>
          <div class="flex justify-center items-center pt-5  text-gray-900 dark:text-white">
            <span class="text-3xl me-2 font-bold">$</span>
            <span class="text-4xl font-extrabold tracking-tight me-2">400</span>
            <span class="ms-1 text-3xl font-bold text-black dark:text-gray-400">/ start</span>
            </div>
            <ul role="list" class="space-y-5 my-7  flex flex-col justify-center items-center ">
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">2 Rm HDB <span class="px-1">-</span> $599</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">3 Rm HDB <span class="px-1">-</span> $899</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">4 Rm HDB <span class="px-1">-</span> $1099</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">5 Rm HDB <span class="px-1">-</span> $1299</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">Executive Apartment <span class="px-1">-</span> $1399</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">Executive Mansionette <span class="px-1">-</span> $1599</p>
              </li>
            </ul>
            <div class="flex justify-center items-center">
              <button type="button" class="text-white w-60 my-5 bg-[#3db7e8] font-medium  text-base px-5 py-3 inline-flex justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38"/><stop offset="100%" stop-color="#60D669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9"/><stop offset="100%" stop-color="#FFF"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
                Whats App Please
              </button>
            </div>
          </div>
          <div class="bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
            <div class="flex px-5 flex-col justify-center items-center w-full h-40 bg-[#771717]">
              <h5 class="mb-2 text-4xl font-bold text-white dark:text-gray-400 ">Epoxy</h5>
              <p class="text-white flex text-center font-normal text-base">Normal Epoxy , & Flakes Epoxy ( Toilet,kitchen, commercial ) area.</p>
            </div>
          <div class="flex justify-center items-center pt-5  text-gray-900 dark:text-white">
            <span class="text-3xl me-2 font-bold">$</span>
            <span class="text-4xl font-extrabold tracking-tight me-2">450</span>
            <span class="ms-1 text-3xl font-bold text-black dark:text-gray-400">/ start</span>
            </div>
            <ul role="list" class="space-y-5 my-7  flex flex-col justify-center items-center ">
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">1 Toilet Floor <span class="px-1">-</span> $450 <span class="px-1">to</span>$700</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">1 Toilet Wall & Floor <span class="px-1">-</span> $850 <span class="px-1">to</span>$1200</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">2 Toilet Floor <span class="px-1">-</span> $750 <span class="px-1">to</span>$1200</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">2 Toilet Wall & Floor <span class="px-1">-</span> $1600 <span class="px-1">to</span>$2300</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">Kitchen <span class="px-1">-</span> $500 <span class="px-1">to</span>$1500</p>
              </li>
              <li class="flex items-center">
                <p class="text-lg font-normal leading-5 text-gray-500 dark:text-gray-400 ms-3">commercial area SQF <span class="px-1">$1</span>start</p>
              </li>
            </ul>
            <div class="flex justify-center items-center">
              <button type="button" class="text-white w-60 my-5 bg-[#771717] font-medium  text-base px-5 py-3 inline-flex justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38"/><stop offset="100%" stop-color="#60D669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9"/><stop offset="100%" stop-color="#FFF"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
                Whats App Please
              </button>
            </div>
          </div>
        </div>
        <!--------------Portfolio------------------->
        <div class=" pb-5 ">
            <div class="text-center flex flex-col justify-center items-center ">
              <h1 class="font-bold text-4xl uppercase">Our Portfolio</h1>
              <div class="h-1 bg-green-400 w-40 mt-px"></div>
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
              <Portfolio/>
              <Portfolio/>
              <Portfolio/>
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
