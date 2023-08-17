<template>
  <div>
    <header class="bg-[#FDFBF0] w-full h-screen <xl:h-auto">
      <nav class="w-full h-[3rem] flex items-center justify-end text-[#464646] text-3xl">
      <a class="p-14 <sm:p-4 hover:text-black" href="#footer">Contact</a>
      </nav>
      <div class="w-full h-40 flex flex-col items-center justify-end pb-6">
        <div class="flex <sm:flex-col-reverse <sm:items-start <sm:gap-2 items-end gap-12 text-[#464646] w-full pl-5"><h1 class="text-8xl <lg:text-6xl" data-aos="fade-right" data-aos-duration="500">DESIGNER</h1><div href="" @click="Work(1)" class="text-3xl underline mb-3 cursor-pointer">moje práce</div></div>
        <div class="w-[98%] h-[1px] bg-[#464646]"></div>
      </div>
      <div class="w-full h-80 logo"></div>
      <div class="w-full <sm:h-auto h-40 flex flex-col <sm:gap-2 items-center justify-end pb-6">
        <div class="w-[98%] h-[1px] bg-[#464646]"></div>
        <div class="flex items-end <sm:flex-col <sm:items-start <sm:gap-2 flex-row-reverse gap-12 text-[#464646] w-full pl-5"><h1 class="text-8xl <lg:text-6xl" data-aos="fade-left" data-aos-duration="500">WEB DEVELOPER</h1><div href="" @click="Work(2)" class="text-3xl underline mb-3 cursor-pointer">moje práce</div></div>
      </div>
    </header>
    <section class="w-full h-screen flex flex-col items-center justify-end bg-[#FDFBF0] <xl:h-auto">
      <div><h1 class="text-8xl work text-[#464646] mt-7 <sm:text-5xl <lg:py-16 <lg:text-center" data-aos="zoom-in" data-aos-duration="500">S ČÍM PRACUJEM</h1></div>
      <div class="w-full h-[40rem] hands flex <lg:gap-8 <lg:flex-col items-center justify-center">
        <div class="w-52 h-[40rem] flex justify-center items-center text-transparent text-stroke-black text-stroke-sm"><h1 class="down MetroBlack text-8xl <sm:text-6xl">DESIGN</h1></div>
        <div class="w-[32rem] h-[40rem] flex items-end <sm:w-full <sm:justify-center"><div class="w-[30rem] <sm:w-auto mb-9 outline-solid-black h-32 flex items-center <sm:justify-center justify-between p-9 <sm:gap-9 outline-2 outline photos" data-aos="fade-right" data-aos-duration="500"><img src="/img/ps.png" width="110" alt=""><img src="/img/ai.png" width="110" alt=""><img src="/img/fig.png" width="110" alt=""></div></div>
        <div class="w-[32rem] h-[40rem] flex <lg:pt-20 <sm:w-full <sm:justify-center"><div class="w-[30rem] <sm:w-auto mt-9 outline-solid-black h-32 flex items-center <sm:justify-center justify-between p-9 <sm:gap-9 outline-2 outline photos" data-aos="fade-left" data-aos-duration="500"><img src="/img/three.png" width="110" alt=""><img src="/img/js.png" width="110" alt=""><img src="/img/next.png" width="110" alt=""></div></div>
        <div class="w-52 h-[40rem] flex <sm:gap-6 gap-3 <lg:gap-10 lg:flex-col justify-center items-center text-transparent text-stroke-black text-stroke-sm"><h1 class="down MetroBlack text-8xl <sm:text-6xl" >WEB</h1><h1 class="down MetroBlack text-8xl <sm:text-6xl">DEV</h1></div>
      </div>
    </section>
    <section class="bg-[#FDFBF0] flex <sm:flex-col <sm:gap-10 items-center justify-between <lg:justify-center h-[32rem] <sm:h-auto">
      <div class="about flex items-start justify-start text-9xl text-[#464646] pl-20 pb-20 mb-35 <sm:p-0 <sm:pt-16 <sm:m-0 absolute <sm:relative left-2 <lg:text-8xl"><h1 data-aos="fade-right" class="<sm:flex <sm:gap-7" data-aos-duration="500">O MNE</h1></div>
      <div class="w-[20rem] h-8 <sm:h-0"></div>
      <p class="Metro w-[35rem] text-lg <lg:text-base <lg:w-[20rem] mt-30 <sm:m-0">Ahoj! Som 18-ročný študent a junior dizajnér a web developer so snom premeniť tento zábavný koníček na niečo veľké! Momentálne experimentujem s viacerými typmi dizajnu: UI/UX, Instagram, reklamná grafika a ďalšie. Zaujímam sa aj o psychológiu, hudbu a technológiu. Milujem byť kreatívny a rád by som to využil na zlepšenie dňa ľudí.</p>
      <div class="w-[20rem] h-[25rem] <sm:w-[15rem] <sm:h-[15rem] <sm:m-0 mr-20 <sm:mt-4 kruh <lg:w-[10rem]"></div>
    </section>
    <div class="w-[98%] h-[1px] mx-2 bg-[#464646]"></div>
    <section class="bg-[#FDFBF0]">
      <div class="w-full h-auto text-center p-9 MetroBold text-5xl text-[#464646]">
        <h1>Choose One</h1>
      </div>
      <div class="flex <lg:flex-col <lg:text-center <lg:gap-10 justify-between MetroBlack text-[#DAD9D1] p-6 transition duration-500 ease-in-out" :class="{'bg-[#F8CB73]': port.num == 1,'bg-[#90C9FE]': port.num == 2 }">
        <div @mouseover="changeColor(1)" @mouseout="changeColor(0)" @click="Klik(1)" class="flex items-center justify-center text-8xl <xl:text-7xl <sm:text-6xl transition duration-500 ease-in-out cursor-pointer" :class="{'text-white': port.num == 1, 'opacity-5': port.num == 2}">DESIGNER<br>PORTFOLIO</div>
        <div class="flex items-center justify-center"> <img class="transition duration-500 ease-in-out" src="/img/arrow.svg" :class="{'opacity-0': port.num == 1 || port.num == 2}" alt=""></div>
        <div @mouseover="changeColor(2)" @mouseout="changeColor(0)" @click="Klik(2)" class="flex items-center justify-center text-8xl <xl:text-7xl <sm:text-6xl text-right <lg:text-center transition duration-500 ease-in-out cursor-pointer" :class="{'text-white': port.num == 2, 'opacity-5': port.num == 1}">WEB<br>DEVELOPER<br>PORTFOLIO</div>
      </div>
    </section>
    <div :class="{'hidden': num.tick==0 || num.tick==2}">
    <design/>
    <design1/>
    <design2/>
    </div>
    <div :class="{'hidden': num.tick==0 || num.tick==1}">
    <web/>
    </div>
    <footer id="footer" class="w-full h-auto bg-[#BABAB7] flex <sm:flex-col <sm:gap-8 items-center justify-between text-[#464646] p-8 px-18 MetroBold">
      <div class="flex gap-8 <sm:flex-col items-center justify-center">
        <div class="flex gap-4 items-center justify-center"><img src="/img/mail.svg" width="30" alt=""><h2>ujhazyadam@gmail.com</h2></div>
        <a href="https://www.linkedin.com/in/adam-ujh%C3%A1zy-966b61234/"><img src="/img/linkedin.svg" width="30"  alt=""></a>
        <a @click="Copy()" href=""><img src="/img/discord.svg" width="35"  alt=""></a>
      </div>
      <div class="flex flex-col items-center gap-3">
        <h2>My CV</h2>
        <a href="zivotopis-ujhazy.pdf"> <img src="/img/link.svg" width="30" alt=""> </a>
      </div>
    </footer>
  </div>
</template>

<script setup>

function Copy(){
  const textToCopy = "qra";
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
            
  alert("Discord username copied (skopírovaný)");
}

let num = reactive(useDesign());

let port = reactive({
  num:0,
  klik:0,
})

function changeColor(element){
  port.num = element
  console.log(port.num)

}

function Work(e){
  num.tick = e

  function smoothScroll(targetY, duration) {
  const startingY = window.pageYOffset;
  const diffY = targetY - startingY;
  let startTime;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    const easing = easeInOutQuad(percentage);
    window.scrollTo(0, startingY + diffY * easing);
    
    if (progress < duration) {
      requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(step);
}

// Usage: Smoothly scroll down by 100 pixels over 500ms
smoothScroll(window.pageYOffset + 2450, 500);

  }

function Klik(e){
  num.tick = e
  function smoothScroll(targetY, duration) {
  const startingY = window.pageYOffset;
  const diffY = targetY - startingY;
  let startTime;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const percentage = Math.min(progress / duration, 1);
    const easing = easeInOutQuad(percentage);
    window.scrollTo(0, startingY + diffY * easing);
    
    if (progress < duration) {
      requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  requestAnimationFrame(step);
}

// Usage: Smoothly scroll down by 100 pixels over 500ms
smoothScroll(window.pageYOffset + 800, 500);
}

</script>

<style scoped>

@media only screen and (min-width: 1024px) {
  .down{
  text-orientation: upright;
  writing-mode: vertical-rl;
}
}

html {
  scroll-behavior: smooth;
}

.kruh{
  background-image: url('/img/kruh.png');
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
}

nav,.h-40,.work,.about{
  font-family: 'LibreCaslon';
}

.MetroBold{
  font-family: 'MetropolisBold';
}

.MetroBlack{
  font-family: 'MetropolisBlack';  
}

.Metro{
  font-family: 'Metropolis'; 
}

.logo{
  background-image: url('/img/logo.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.hands{
  background-image: url('/img/hands.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 130%;

}





@media only screen and (max-width: 640px) {

  .hands{
    background-size: 200%;
  }

  .photos img{
    width: 4rem;
  }
  
  .kruh{

  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  }

}

</style>
