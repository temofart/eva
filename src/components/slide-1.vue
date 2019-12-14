<template>
  <div class="slide slide-1 column-2" :class="{'validate': validate}">
    <div class="column">
      <h2 class="title">Виртуальный<br>конструктор ковриков</h2>
      <div class="step">ШАГ 1 из 4</div>
      <strong class="description">В первую очередь нужно проверить наличие
лекал под Ваш автомобиль</strong>
      <image-svg class="mobile" :class="{'loading': loading, 'found': found}" />
      <div
        v-if="isMobile"
        class="my-select-wrapper"
        :class="{'selected': selectedBrand !== 'Марка автомобиля'}"
        @change="findModel"
      >
        <select
          class="my-select"
          v-model="selectedBrand"
        >
          <option value="Марка автомобиля" disabled selected>Марка автомобиля</option>
          <template v-for="brand in brands">
            <option :value="brand" :key="brand">{{brand}}</option>
          </template>
        </select>
      </div>
      <v-select
        v-else
        :class="{'active': selectedBrand, 'error': !selectedBrand}"
        class="select"
        :options="brands"
        v-model="selectedBrand"
        @input="findModel"
        placeholder="Марка автомобиля"
      >
        <span slot="no-options">Не найдено</span>
      </v-select>

      <div
        v-if="isMobile"
        class="my-select-wrapper"
        :class="{'selected': selectedModel !== 'Модель автомобиля'}"
      >
        <select
          class="my-select"
          v-model="selectedModel"
        >
          <option value="Модель автомобиля" disabled selected>Модель автомобиля</option>
          <template v-for="model in models">
            <option :value="model" :key="model">{{model}}</option>
          </template>
        </select>
      </div>
      <v-select
        v-else
        :class="{'active': selectedModel !== 'Модель автомобиля', 'error': selectedModel == 'Модель автомобиля'}"
        class="select"
        :options="models"
        v-model="selectedModel"
        placeholder="Модель автомобиля"
        :disabled="!selectedBrand"
      >
        <span slot="no-options">Не найдено</span>
      </v-select>

      <div
        v-if="isMobile"
        class="my-select-wrapper"
        :class="{'selected': selectedYear !== 'Год выпуска'}"
      >
        <select
          class="my-select"
          v-model="selectedYear"
        >
          <option value="Год выпуска" disabled selected>Год выпуска</option>
          <template v-for="year in years">
            <option :value="year" :key="year">{{year}}</option>
          </template>
        </select>
      </div>
      <v-select
        v-else
        :class="{'active': selectedYear, 'error': !selectedYear}"
        class="select"
        :options="years"
        v-model="selectedYear"
        placeholder="Год выпуска"
        :disabled="!selectedBrand || !selectedModel"
      >
        <span slot="no-options">Не найдено</span>
      </v-select>
      <button class="button" :class="{disabled: disabled}" @click.prevent="sendData">Проверить</button>
    </div>
    <div class="column">
      <image-svg :class="{'loading': loading, 'found': found}" />
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
      selectedBrand: 'Марка автомобиля',
      selectedModel: 'Модель автомобиля',
      selectedYear: 'Год выпуска',
      loading: false,
      validate: false,
      found: false
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
      if (this.selectedBrand && this.selectedModel && this.selectedYear) {
        this.validate = false
        this.loading = true
        setTimeout(() => {
          this.found = true
          this.loading = false
        }, 1000)
        setTimeout(() => {
          this.setCar([this.selectedBrand, this.selectedModel, this.selectedYear])
          this.next()
          this.found = false
          if(document.getElementById("rec140931884")) {
            document.getElementById("rec140931884").scrollIntoView({block: "start", behavior: "smooth"})
          }
        }, 2000);
      }
      else {
        this.validate = true
      }
    }
  },
  mounted() {
    this.createBrands()
    this.createYears()
  },
  computed: {
    disabled: {
      get() {
        return this.selectedBrand && this.selectedModel && this.selectedYear ? false : true
      }
    },
    isMobile: {
      get() {
        return window.innerWidth < 1024 ? false : true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .column:first-child {
    padding-right: 10%;
  }
</style>