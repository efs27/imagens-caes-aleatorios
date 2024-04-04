<template>
  <div class="divisao">
    <p class="paragrafo">
      Olá! Sou apaixonado por Cães e está aplicação serve para mostrar imagens
      de cães aleatórias!
    </p>
    <div>
      <button class="botao" @click="fetchDogImage">Mostrar outra imagem</button>
    </div>
    <img
      class="imagem"
      :src="dogImageUrl"
      alt="Imagem de cachorro"
      v-if="dogImageUrl"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dogImageUrl: null,
    };
  },
  methods: {
    async fetchDogImage() {
      try {
        const response = await axios.get("https://random.dog/woof.json");
        this.dogImageUrl = response.data.url;
      } catch (error) {
        console.error("Erro ao buscar imagem de cachorro:", error);
      }
    },
  },
  mounted() {
    this.fetchDogImage();
  },
};
</script>
<style>
.divisao {
  align-items: center;
}
.imagem {
  width: 500px;
  height: 500px;
  object-fit: cover;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.botao {
  margin: 15px;
  font-size: 25px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #11b613;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 10px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.paragrafo {
  font-size: 25px;
}
</style>
