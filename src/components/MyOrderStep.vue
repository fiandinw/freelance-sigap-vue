<template>
  <div class="p-8 shadow-lg flex flex-row gap-4 relative">
    <div class="text-lg text-sigap-gray absolute top-0 right-0 m-4">
      DD MM YYYY
    </div>
    <img
      class="w-3/12 aspect-video"
      src="https://picsum.photos/300/100"
      alt="service image"
      width="1280"
      height="720"
    />
    <div class="grow flex flex-col items-center">
      <div class="font-semibold text-2xl">{service title}</div>
      <div class="grow grid grid-cols-6 gap-8">
        <div class="flex flex-col items-center justify-evenly">
          <div>
            <div
              class="w-[70px] h-[70px] rounded-[100%] bg-sigap-primary text-white flex items-center justify-center"
            >
              <i class="fa fa-check fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div>Order Dibuat</div>
        </div>
        <div class="flex flex-col items-center justify-evenly">
          <div>
            <div
              class="w-[70px] h-[70px] rounded-[100%] bg-sigap-primary text-white flex items-center justify-center"
            >
              <i class="fa fa-credit-card-alt fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div>Pembayaran</div>
        </div>
        <div class="flex flex-col items-center justify-evenly">
          <div>
            <div
              class="w-[70px] h-[70px] rounded-[100%] bg-sigap-primary text-white flex items-center justify-center"
            >
              <i class="fa fa-hourglass-half fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div>Order Proses</div>
        </div>
        <div class="flex flex-col items-center justify-evenly">
          <div>
            <div
              class="w-[70px] h-[70px] rounded-[100%] bg-sigap-primary text-white flex items-center justify-center"
            >
              <i class="fa fa-check-square-o fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div>Tinjauan</div>
        </div>
        <div class="flex flex-col items-center justify-evenly">
          <div>
            <div
              class="w-[70px] h-[70px] rounded-[100%] bg-sigap-primary text-white flex items-center justify-center"
            >
              <i class="fa fa-check fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div>Selesai</div>
        </div>
        <div class="flex flex-col items-center justify-evenly">
          <div>
            <div
              class="w-[70px] h-[70px] rounded-[100%] bg-sigap-primary text-white flex items-center justify-center"
            >
              <i class="fa fa-star-o fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div>Feedback</div>
        </div>
      </div>
    </div>
  </div>
</template>
