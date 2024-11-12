<template>

  <h4 class="text-center">Update User Zone</h4>
  <section class="row">
    <form @submit.prevent="clickEdit" class="col-8 m-auto">
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Username</label>
        <input v-model="name" type="text" class="form-control" id="exampleInputPassword1" required>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          required>
      </div>
      <button type="submit" class="btn btn-success">Edit User</button>
    </form>
  </section>

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

<style scoped></style>
