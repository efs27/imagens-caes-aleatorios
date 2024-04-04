<template>
  <div class="login-container">
    <form @submit.prevent="login" class="login-form">
      <input
        class="inputManager"
        type="text"
        placeholder="Nome"
        v-model="username"
      />
      <input
        class="inputManager"
        type="password"
        placeholder="Senha"
        v-model="password"
      />
      <button class="login-button" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.username && this.password) {
        this.$router.push({ name: "dogImage" });
      } else {
        alert("Preencha os campos e tente novamente!");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
}

.inputManager {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 20px;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
