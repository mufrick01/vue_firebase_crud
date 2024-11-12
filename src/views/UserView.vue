<template>
  <div>
    <form @submit.prevent="newUser">
      name<input v-model="name" type="text">
      email<input v-model="email" type="text">
      <button>add user</button>
    </form>

    <div v-if="users.length === 0">Cargando usuarios ... </div>
    <div v-else v-for="(user) in users" :key="user._id">
      <span style="margin-right: 10px;">{{ user.name }} | </span>
      <span style="margin-right: 10px;">{{ user.email }} | </span>
      <span style="margin-right: 10px;">{{ user._id }}</span>

      <button @click="deleteUser(user._id)">delete</button>
      <button @click="goToEditUser(user)">Edit</button>
    </div>

  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

// add
const name = ref();
const email = ref();


const router = useRouter();

const { users, selectEditableUser, addUser, deleteUser } = useUserStore();

const newUser = () => {
  addUser(name.value, email.value)
  name.value = ''
  email.value = ''
}


const goToEditUser = (user) => {

  console.log(user);
  selectEditableUser(user);

  router.push({ name: 'edit', params: { id: user._id } });
};


</script>

<style scoped></style>
