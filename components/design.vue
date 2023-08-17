<script setup>

const items = reactive([
  {
    id: 1,
    img: "/img/poster/poster1.png",
  },
  {
    id: 2,
    img: "/img/poster/poster2.png",
  },
]);



let tick = 0
let check = ref(1)
let nextId = items.length + 1; // Start the new IDs from the count of existing items + 1

function Klik() {
    if (tick == 0){
        check = 0
  const newItems = [
    {
      id: nextId++,
      img: "/img/poster/drive.png",
    },
    {
      id: nextId++,
      img: "/img/poster/eu.png",
    },
    {
      id: nextId++,
      img: "/img/poster/taxi.png",
    },
    {
      id: nextId++,
      img: "/img/poster/music.png",
    },
    {
      id: nextId++,
      img: "/img/poster/coffee.png",
    },
  ];

  const addItemsWithDelay = (index) => {
    if (index < newItems.length) {
 
      items.splice(items.length - 1, 0, newItems[index]);


      renderItems();

      setTimeout(() => {
        addItemsWithDelay(index + 1);
      }, 100); 
    }
  };

  addItemsWithDelay(0);
  }
  tick = 1
};

function renderItems() {
  
}


</script>

<template>
  <div>
    <section class="bg-[#525252] w-full h-[20rem] <sm:h-[13rem] flex">
      <div id="begins" class="text-white MetroBlack text-8xl <lg:text-6xl <sm:text-5xl w-[50%] p-5 flex justify-between items-center">
         <h1>DESIGNER <br> PORTFOLIO</h1>
         <div class="h-[90%] w-[4px] bg-white"></div>
      </div>
      <div class="w-[50%] <lg:w-[40%] flex items-center justify-center <sm:hidden"> <img class="h-[90%]"  src="/img/des.svg" alt=""></div>
    </section>
    <section class="flex flex-col gap-8 bg-[#FDFBF0] p-24 <sm:p-10 transition duration-500 ease-in-out">
    <section  class="flex items-center justify-center transition duration-500 ease-in-out">
      <ul :class="{'gap-5': check == 0}" class=" w-full h-auto grid grid-rows-2 <md:grid-rows-3 grid-cols-[repeat(auto-fit,_20.666666%)] <lg:grid-cols-[repeat(auto-fit,_28.666666%)] <sm:grid-cols-[repeat(auto-fit,_49.666666%)] m-auto justify-center" v-auto-animate="{ duration: 300 }">
    <li @mouseover="Klik()" @click="Klik()" class="flex"
      v-for="item in items"
    >
      <img class="h-[26rem] <lg:h-[20rem] <sm:h-[15rem]" :src="item.img" width="500" alt="">
    </li>
  </ul>
    </section>
  </section>

  </div>
</template>

<style scoped>

.MetroBlack{
  font-family: 'MetropolisBlack';  
}

.test{
  transition: opacity 0.5s ease; 
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
