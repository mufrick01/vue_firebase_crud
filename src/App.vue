<template>
  <nav class="navbar navbar-expand-lg bg-info">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="" style="height: 50px;">
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active text-white" aria-current="page" to="/">
              <span style="font-size: 30px;">Home</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main>
    <h1 class="text-center">CRUD FIREBASE</h1>
    <RouterView />
  </main>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 40px;
}
</style>
