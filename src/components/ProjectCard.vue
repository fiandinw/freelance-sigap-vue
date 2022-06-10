<template>
  <div
    class="card w-[420px] h-[420px] px-14 shadow-lg rounded-3xl grid grid-rows-3"
  >
    <div class="flex items-center justify-center">{icon}</div>
    <div class="flex flex-col items-center justify-center">
      <div class="font-lato font-bold text-4xl">{title}</div>
      <div class="text-2xl">{description of the project card}</div>
    </div>
    <div class="flex flex-row items-end justify-between py-8 relative">
      <div>
        <div class="font-semibold text-xl text-opacity-70 text-black">
          Start From
        </div>
        <div class="font-semibold text-2xl text-sigap-primary text-opacity-70">
          Rp <span class="font-extrabold text-3xl">{000}</span>.K
        </div>
      </div>
      <button
        class="absolute -right-6 font-semibold text-lg text-white bg-sigap-primary px-6 py-1 rounded-full"
      >
        Apply Now
      </button>
    </div>
  </div>
</template>
