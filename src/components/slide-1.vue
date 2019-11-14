<template>
  <div class="slide column-2">
    <div class="column">
      <h2 class="title">Виртуальный<br>конструктор ковриков</h2>
      <div class="step">ШАГ 1 из 4</div>
      <strong class="description">В первую очередь нужно проверить наличие
лекал под Ваш автомобиль</strong>
      <v-select
        :class="{'active': selectedBrand}"
        class="select"
        :options="brands"
        v-model="selectedBrand"
        @input="findModel"
        placeholder="Марка автомобиля"
      >
        <span slot="no-options">Не найдено</span>
      </v-select>
      <v-select
        :class="{'active': selectedModel}"
        class="select"
        :options="models"
        v-model="selectedModel"
        placeholder="Модель автомобиля"
        :disabled="!selectedBrand"
      >
        <span slot="no-options">Не найдено</span>
      </v-select>
      <v-select
        :class="{'active': selectedYear}"
        class="select"
        :options="years"
        v-model="selectedYear"
        placeholder="Год выпуска"
        :disabled="!selectedBrand || !selectedModel"
      >
        <span slot="no-options">Не найдено</span>
      </v-select>
      <button class="button" @click.prevent="sendData" :disabled="!allowNext">Проверить</button>
    </div>
    <div class="column">
      <image-svg :class="{'loading': loading}" />
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'slide-1',
  data() {
    return {
      json: [],
      brands: [],
      models: [],
      years: [],
      selectedBrand: null,
      selectedModel: null,
      selectedYear: null,
      loading: false
    }
  },
  methods: {
    ...mapMutations(['next', 'setCar']),
    async createBrands() {
      const res = await fetch("https://api.auto.ria.com/categories/1/marks")
      this.json = await res.json()
      this.json.forEach((item) => {
        this.brands.push(item.name)
      })
    },
    findModel() {
      const current = this.selectedBrand
      this.json.forEach((item) => {
        if(item.name === current) {
          this.fetchModel(item.value)
        }
      })
    },
    async fetchModel(brand) {
      const res = await fetch(`https://api.auto.ria.com/categories/1/marks/${brand}/models`)
      const json = await res.json()
      this.models = []
      json.forEach((item) => {
        this.models.push(item.name)
      })
    },
    createYears() {
      for(let i = 2020; i >= 1980; i--) {
        this.years.push(i)
      }
    },
    sendData() {
      this.loading = true
      setTimeout(() => {
        this.setCar([this.selectedBrand, this.selectedModel, this.selectedYear])
        this.next()
      }, 1000);
    }
  },
  mounted() {
    this.createBrands()
    this.createYears()
  },
  computed: {
    allowNext: {
      get() {
        return this.selectedBrand && this.selectedModel && this.selectedYear ? true : false
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .column:first-child {
    padding-right: 10%;
  }
  button {
    margin-top: 30px;
  }
</style>