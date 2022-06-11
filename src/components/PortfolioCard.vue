<template>
  <div class="card w-[350px] rounded-2xl overflow-hidden shadow-lg">
    <img
      class="w-[350px] h-[350px] object-cover"
      src="https://picsum.photos/100/100"
      alt="freelancer profil"
      width="350"
      height="350"
    />
    <div class="p-6 flex flex-row items-center justify-between">
      <div>
        <div class="font-poppins font-medium text-2xl">{Name}</div>
        <div class="font-poppins text-xl text-sigap-gray">{Category}</div>
      </div>
      <div>
        <i
          class="fa fa-arrow-right text-sigap-primary fa-2x"
          aria-hidden="true"
        ></i>
      </div>
    </div>
  </div>
</template>
