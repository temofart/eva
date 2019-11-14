<template>
  <div class="slide slide-2 column-2">
    <div class="column">
      <h2 class="title">Виртуальный<br>конструктор ковриков</h2>
      <div class="step">ШАГ 2 из 4</div>
      <strong class="description">Следующий шаг- персонализация, подбор цветовой гаммы Ваших будущих ковриков</strong>
      <image-svg
        :mainColor="getMainColor"
        :borderColor="getSecondaryColor"
        class="mobile"
      />
      <v-select
        :options="mainColors"
        v-model="selectedMainColor"
        placeholder="Цвет полимера"
      />
      <v-select
        :options="secondaryColors"
        v-model="selectedSecondaryColor"
        placeholder="Цвет канта"
      />
      <button
        class="button"
        @click.prevent="sendData"
        :disabled="!allowNext">Дальше
      </button>
      <button
        class="button-prev"
        @click.prevent="prev">Вернуться назад
      </button>
    </div>
    <div class="column">
      <image-svg
        :mainColor="getMainColor"
        :borderColor="getSecondaryColor"
      />
    </div>
  </div>
</template>

<script>
import colors from '../api/color'
import {mapMutations} from 'vuex'
export default {
  name: 'slide-2',
  data() {
    return {
      mainColors: [],
      secondaryColors: [],
      selectedMainColor: null,
      selectedSecondaryColor: null
    }
  },
  mounted() {
    this.mainColors = Object.keys(colors.main)
    this.secondaryColors = Object.keys(colors.secondary)
  },
  methods: {
    ...mapMutations(['next', 'prev', 'setColor']),
    sendData() {
      this.setColor([this.selectedMainColor, this.selectedSecondaryColor])
      this.next()
    }
  },
  computed: {
    allowNext: {
      get() {
        return this.selectedMainColor && this.selectedSecondaryColor ? true : false
      }
    },
    getMainColor: {
      get() {
        return colors.main[this.selectedMainColor]
      }
    },
    getSecondaryColor: {
      get() {
        return colors.secondary[this.selectedSecondaryColor]
      }
    }
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