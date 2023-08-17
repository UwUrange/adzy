<script setup>

const items = reactive([
  {
    id: 1,
    img: "/img/ux/ui.png",
  },
  {
    id: 2,
    img: "/img/ux/uxx.png",
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
      img: "/img/ux/ux.png",
    },
    {
      id: nextId++,
      img: "/img/ux/ux2.png",
    },
    {
      id: nextId++,
      img: "/img/ux/ux3.png",
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
    
    <section class="flex flex-col gap-8 bg-[#FDFBF0] p-24 transition duration-500 ease-in-out">
    <section  class="flex items-center justify-center transition duration-500 ease-in-out w-full">
      <ul :class="{'gap-5': check == 0, 'left': check == 1, 'ux': check == 0}" class="grid grid-cols-3 <md:grid-rows-3 <md:grid-cols-2 <md:grid-rows-4 grid-rows-2" v-auto-animate="{ duration: 300 }">
    <li @mouseover="Klik()" @click="Klik()" class="flex items-center justify-center"
      v-for="item in items"
    >
      <img :src="item.img" class="h-96 <lg:h-[20rem] <sm:h-[15rem]" alt="">
    </li>
  </ul>
    </section>
  </section>


  </div>
</template>

<style scoped>


.left{
  margin-left: 15rem;
}

@media only screen and (max-width: 768px) {
  .left{
    margin-left: 8rem;
  }
}

@media only screen and (max-width: 640px) {

  .left{
    margin-left: 0rem;
  }

  .ux{
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

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
