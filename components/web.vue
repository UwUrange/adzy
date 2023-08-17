<script setup>

let num = reactive(useDesign());

const items = reactive([
  {
    id: 1,
    img: "/img/web/site1.png",
    text: "#web",
  },
  {
    id: 2,
    img: "/img/web/site2.png",
    text: "#web",
  },
]);



let tick = 0
let check = reactive({
  num:1
})
let nextId = items.length + 1; // Start the new IDs from the count of existing items + 1

function Klik() {
    if (tick == 0){
        check.num = 0
  const newItems = [
    {
      id: nextId++,
      img: "/img/web/web.png",
      text: "https://uwurange.github.io/",
    },
    {
      id: nextId++,
      img: "/img/web/web2.png",
      text: "https://adamzy.space/",
    },
    {
      id: nextId++,
      img: "/img/web/web3.png",
      text: "https://powacraft.sk/",
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
  num.tick = 1
}


</script>

<template>
  <div>
    <section class="bg-[#525252] w-full h-auto flex <sm:h-[14rem]">
      <div id="begin" class="text-white MetroBlack text-8xl w-[50%] <lg:text-6xl <sm:text-5xl p-5 flex justify-between items-center">
         <h1>WEB DEV <br> PORTFOLIO</h1>
         <div class="h-[90%] w-[4px] bg-white"></div>
      </div>
      <div class="w-[50%] flex items-center justify-center <sm:hidden"> <img class="h-[90%]"  src="/img/web.svg" alt=""></div>
    </section>
    <section class="flex flex-col gap-8 bg-[#FDFBF0] p-24 <lg:p-0 <lg:pt-9 <sm:p-10 transition duration-500 ease-in-out">
    <section  class="flex items-center justify-center transition duration-500 ease-in-out w-full">
      <ul :class="{'gap-5': check.num == 0,'web': check.num == 0, 'ml-80': check.num == 1}" class="grid grid-cols-3 <lg:grid-cols-2 <sm:ml-0 <md:ml-0 <lg:ml-14 grid-rows-2" v-auto-animate="{ duration: 300 }">
    <li @mouseover="Klik()" @click="Klik()" class="flex items-center justify-center"
      v-for="item in items"
    >
     <!-- <img :src="item.img" class="h-96" alt="">-->
      <div class="w-[35rem] h-[20rem] <sm:w-[384px] <sm:h-[192px] <lg:w-[18rem] <lg:h-[14rem] bg-cover bg-no-repeat flex items-center justify-center bg-center" :style="{ backgroundImage: `url(${item.img})` }"><div class="w-full h-full transition duration-500 ease-in-out flex items-center justify-center" :class="{'hover:bg-black/30':item.id >2, 'hover:backdrop-blur-lg':item.id >2}"><a id="web" class="opacity-0 w-full h-full text-center flex items-center justify-center text-white transition duration-500 ease-in-out <sm:opacity-100 <sm:bg-black/30 hover:opacity-100" v-if="item.id > 2" :href="item.text">{{ item.text }}</a></div></div>
    </li>
  </ul>
    </section>
    <a href="#begins"><h2 @click="Shows()" class="flex w-full items-center justify-center text-3xl underline cursor-pointer <lg:pb-10">Show Design portfolio ?</h2></a>
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

@media only screen and (max-width: 640px) {

.web{
  grid-template-columns: repeat(1, minmax(0, 1fr));
  
}

.web li div{
  background-size: contain;
}

}

</style>
