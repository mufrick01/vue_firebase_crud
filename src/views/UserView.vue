<template>
  <div>
    <h2> user views</h2>
    <form @submit.prevent="newUser">
      name<input v-model="name" type="text">
      email<input v-model="email" type="text">
      <button>add user</button>
    </form>

    <div v-if="users.length === 0">Cargando usuarios ... </div>
    <div v-else v-for="(user) in users" :key="user.id">
      <span style="margin-right: 10px;">{{ user.name }} | </span>
      <span style="margin-right: 10px;">{{ user.email }} | </span>
      <span style="margin-right: 10px;">{{ user._id }}</span>

      <button @click="deleteUser(user._id)">delete</button>
      <button @click="FillEditZone(user)">Edit</button>
    </div>


    <h4>### edit zone </h4>
    <form @submit.prevent="updateHandler">
      name<input v-model="nameEdit" type="text">
      email<input v-model="emailEdit" type="text">
      <button>Edit User</button>
    </form>

  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/useUserStore';
import { ref } from 'vue';

// add
const name = ref();
const email = ref();
// edit
const emailEdit = ref();
const nameEdit = ref();
const idEdit = ref();

const { users, addUser, deleteUser, updateUser } = useUserStore();

const newUser = () => {
  addUser(name.value, email.value)
  name.value = ''
  email.value = ''
}


const FillEditZone = (user) => {
  idEdit.value = user._id;
  nameEdit.value = user.name;
  emailEdit.value = user.email;

}

const updateHandler = () => {
  if (idEdit.value === '') return
  if (nameEdit.value === '') return
  if (emailEdit.value === '') return

  updateUser(idEdit.value, nameEdit.value, emailEdit.value);

  idEdit.value = ''
  nameEdit.value = ''
  emailEdit.value = ''
}

</script>

<style scoped></style>
