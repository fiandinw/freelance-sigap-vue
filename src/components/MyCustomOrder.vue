<script setup>
  import iconcheck from "../assets/icons/check.png";
  defineProps(["ispending"]);
</script>
<template>
  <div v-if="$props.ispending" class="w-[550px] shadow-lg">
    <div class="px-8 flex flex-col py-4">
      <div class="text-sigap-gray self-end">DD MM YYYYY</div>
      <div class="font-lato font-bold text-4xl text-sigap-primary">
        {project name}
      </div>
      <div class="mt-8">
        <input
          class="px-4 py-2 border-[1px] rounded-lg w-full"
          type="text"
          id="nama"
          name="nama"
          value="{username}"
          disabled
        />
      </div>
      <div class="mt-2">
        <input
          class="px-4 py-2 border-[1px] rounded-lg w-full"
          type="text"
          id="nama"
          name="nama"
          value="{email}"
          disabled
        />
      </div>
      <div class="mt-2 flex flex-row items-center justify-between gap-8">
        <input
          class="px-4 py-2 border-[1px] rounded-lg w-6/12"
          type="text"
          id="nama"
          name="nama"
          value="{kategori}"
          disabled
        />
        <input
          class="px-4 py-2 border-[1px] rounded-lg w-6/12"
          type="text"
          id="nama"
          name="nama"
          value="{subkategori}"
          disabled
        />
      </div>
      <div class="mt-4">Deskripsi</div>
      <div class="mt-2">
        <textarea
          class="px-4 py-2 border-[1px] rounded-lg w-full"
          type="text"
          id="nama"
          name="nama"
          disabled
        >
Deskripsi dari jasa yang dipesan</textarea
        >
      </div>
      <div
        class="mt-2 text-sigap-primary font-semibold underline cursor-pointer"
      >
        Lihat Lampiran
      </div>
      <div
        class="mt-4 text-right font-lato font-bold text-4xl text-sigap-primary"
      >
        Rp. 0K
      </div>
    </div>
    <div
      class="bg-sigap-primary flex flex-row items-center justify-between text-white font-semibold text-2xl px-8 py-4"
    >
      <div>Accepted</div>
      <img
        class="w-12 h-12 object-cover"
        :src="iconcheck"
        alt="icon"
        style="filter: brightness(0) invert(1)"
      />
    </div>
  </div>

  <!-- DIVIDER -->
  <!-- DIVIDER -->
  <!-- DIVIDER -->
  <!-- DIVIDER -->
  <!-- DIVIDER -->

  <div class="w-[550px] shadow-lg">
    <div class="px-8 flex flex-col py-4">
      <div class="text-sigap-gray self-end">DD MM YYYYY</div>
      <div class="font-lato font-bold text-4xl text-sigap-primary">
        {project name}
      </div>
      <div class="mt-8">
        <input
          class="px-4 py-2 border-[1px] rounded-lg w-full"
          type="text"
          id="nama"
          name="nama"
          value="{username}"
          disabled
        />
      </div>
      <div class="mt-2">
        <input
          class="px-4 py-2 border-[1px] rounded-lg w-full"
          type="text"
          id="nama"
          name="nama"
          value="{email}"
          disabled
        />
      </div>
      <div class="mt-2 flex flex-row items-center justify-between gap-8">
        <input
          class="px-4 py-2 border-[1px] rounded-lg w-6/12"
          type="text"
          id="nama"
          name="nama"
          value="{kategori}"
          disabled
        />
        <input
          class="px-4 py-2 border-[1px] rounded-lg w-6/12"
          type="text"
          id="nama"
          name="nama"
          value="{subkategori}"
          disabled
        />
      </div>
      <div class="mt-4">Deskripsi</div>
      <div class="mt-2">
        <textarea
          class="px-4 py-2 border-[1px] rounded-lg w-full"
          type="text"
          id="nama"
          name="nama"
          disabled
        >
Deskripsi dari jasa yang dipesan</textarea
        >
      </div>
      <div
        class="mt-2 text-sigap-primary font-semibold underline cursor-pointer"
      >
        Lihat Lampiran
      </div>
      <div
        class="mt-4 text-right font-lato font-bold text-4xl text-sigap-primary"
      >
        Rp. 0K
      </div>
    </div>
    <div
      class="bg-sigap-primary flex flex-row items-center justify-between text-white font-semibold text-2xl px-8 py-4"
    >
      <div>Accepted</div>
      <img
        class="w-12 h-12 object-cover"
        :src="iconcheck"
        alt="icon"
        style="filter: brightness(0) invert(1)"
      />
    </div>
  </div>
</template>
