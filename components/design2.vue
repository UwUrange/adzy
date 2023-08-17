<script setup>

let num = reactive(useDesign());

const items = reactive([
  {
    id: 1,
    img: "/img/posts/sm1.png",
  },
  {
    id: 2,
    img: "/img/posts/sm2.png",
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
      img: "/img/posts/p.png",
    },
    {
      id: nextId++,
      img: "/img/posts/p3.jpg",
    },
    {
      id: nextId++,
      img: "/img/posts/p4.jpg",
    },
    {
      id: nextId++,
      img: "/img/posts/p5.png",
    },
    {
      id: nextId++,
      img: "/img/posts/p6.png",
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

function Shows(){
    num.tick = 2


}

</script>

<template>
  <div>
    <section class="flex flex-col gap-8 bg-[#FDFBF0] p-24 <sm:p-10 transition duration-500 ease-in-out">
    <section  class="flex items-center justify-center transition duration-500 ease-in-out">
      <ul :class="{'gap-5': check == 0}" class="bg-[#FDFBF0] w-full h-auto grid grid-rows-2 <md:grid-rows-3 grid-cols-[repeat(auto-fit,_20.666666%)] <lg:grid-cols-[repeat(auto-fit,_28.666666%)] <sm:grid-cols-[repeat(auto-fit,_45.666666%)] m-auto justify-center" v-auto-animate="{ duration: 300 }">
    <li @mouseover="Klik()" @click="Klik()" class="flex"
      v-for="item in items"
    >
      <img class="<sm:h-[15rem]"  :src="item.img" width="500" alt="">
    </li>
  </ul>
    </section>
    <div class="w-full h-full p-36 <md:p-0">
    <img src="/img/dres.png" class="outline-solid-current outline-black" alt="">
  </div>
 <a href="#begin"><h2 @click="Shows()" class="text-center text-3xl underline cursor-pointer">Show Web portfolio ?</h2></a>
</section>
  </div>
</template>

<style scoped>

h2{
    font-family: 'LibreCaslon'
}
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
