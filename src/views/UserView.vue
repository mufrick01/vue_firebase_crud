<template>
  <section class="row m-5">
    <form @submit.prevent="newUser" class="col-12 col-lg-4">
      <h3>Add User Zone</h3>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Username</label>
        <input v-model="name" type="text" class="form-control" id="exampleInputPassword1" required>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          required>
      </div>
      <button type="submit" class="btn btn-primary">Add User</button>
    </form>


    <div class="col-12 col-lg-8 mt-5 mt-lg-0">
      <div v-if="users.length === 0">Loading ... </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user._id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button class="btn btn-danger me-2" @click="deleteUser(user._id)">Delete</button>
              <button class="btn btn-success" @click="goToEditUser(user)">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>

    </div>

  </section>
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
