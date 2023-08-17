<script setup>
const items = reactive([
  {
    id: 1,
    img: "img/poster/poster1.png",
  },
  {
    id: 2,
    img: "img/poster/poster2.png",
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
      img: "img/poster/drive.png",
    },
    {
      id: nextId++,
      img: "img/poster/eu.png",
    },
    {
      id: nextId++,
      img: "img/poster/taxi.png",
    },
    {
      id: nextId++,
      img: "img/poster/music.png",
    },
    {
      id: nextId++,
      img: "img/poster/coffee.png",
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

<template class="flex w-full h-auto items-center justify-center">
  <ul :class="{'gap-5': check == 0}" class=" w-full h-auto grid grid-rows-2 grid-cols-[repeat(auto-fit,_16.666666%)] m-auto justify-center" v-auto-animate="{ duration: 500 }">
    <li @mouseover="Klik()" class="flex"
      v-for="item in items"
    >
      <img class="h-96" :src="item.img" alt="">
    </li>
  </ul>
</template>