<template>
  <form @submit.prevent="clickEdit">
    <label>
      name
      <input v-model="name" type="text">
    </label>
    <label>
      email
      <input v-model="email" type="text">
    </label>
    <button class="btn">Edit</button>
  </form>

</template>

<script setup lang="ts">

import { useUserStore } from '@/stores/useUserStore';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const name = ref();
const email = ref();


const route = useRoute();
const id = route.params.id;

const router = useRouter();

const { userToEdit, updateUser, selectEditableUser } = useUserStore();



const clickEdit = () => {
  updateUser(id, name.value, email.value)
  selectEditableUser(null);
  router.push({ name: 'users' });

}




onMounted(() => {

  if (!userToEdit.value) return router.push({ name: 'users' });

  name.value = userToEdit.value.name;
  email.value = userToEdit.value.email;

})
</script>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  margin: 20px 0
}

input {
  width: 300px;
}

.btn {
  margin: 20px 0 20px 0;
  width: 200px;
}
</style>
