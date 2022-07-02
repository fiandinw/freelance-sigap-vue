<script setup>
  import { collection, getDocs, getFirestore } from "@firebase/firestore";
  import { onMounted, ref } from "vue";

  const db = getFirestore();
  const colRef = collection(db, "customOrder");

  const data = ref([]);

  onMounted(() => {
    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          data.value.push({ ...doc.data(), id: doc.id });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleStatusOrder = () => {
    swal("Kontrol Status Order");
  };
</script>
<template>
  <table class="uk-table uk-table-divider">
    <caption>
      Data Custom Order
    </caption>
    <thead>
      <tr>
        <th>Tanggal Order</th>
        <th>Customer</th>
        <th>Email</th>
        <th>Telepon</th>
        <th>Deskripsi</th>
        <th>Estimasi Budget (Rp)</th>
        <th>Status Order</th>
      </tr>
    </thead>
    <!-- <tfoot>
      <tr>
        <td>Table Footer</td>
        <td>Table Footer</td>
        <td>Table Footer</td>
      </tr>
    </tfoot> -->
    <tbody>
      <tr v-for="item in data">
        <td>{{ item.createdAt }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.budgetEstimation }}</td>
        <td>
          <button
            @click="handleStatusOrder"
            class="uk-button uk-button-default"
          >
            {{ item.orderStatus }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
