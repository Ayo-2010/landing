<template>
  <div class="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="bg-white">
      <div class="relative bg-quote shadow-lg w-full h-full bg-cover bg-center  flex flex-row items-center justify-center">
        <Marquee class="top-0 left-0 absolute"/>
        <div class="w-[33%] hidden lg:block " />
    <div class="flex-1 px-18 flex flex-col py-20  justify-center space-y-4 ">
         <HeadingBadge text="Get a free quote" />
        <h3 class="text-4xl font-bold">Have a project in mind?</h3>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Phone" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" class="col-span-2"></textarea>
          <button type="submit" class="col-span-2 bg-amber-500 py-2">Request Quote</button>
        </form>
    </div> 
      </div>
    </div>
  </div>
</template>
<script setup>
  import HeadingBadge from './HeadingBadge.vue'
  import Marquee from '../component/Marquee.vue'
</script>

<style scoped>
form{
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
}
input{
  grid-column: span 1;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
textarea{
  grid-column: span 2;
  box-sizing: border-box;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
.bg-quote{
  /* background-color: #3d3a3a; */
  background-image: url('/images/contact-bg4-1.png');
  background-size: cover;
  background-position: center;
}

</style>