<template>
  <div class="slide slide-2 column-2" :class="{'validate': validate}">
    <div class="column">
      <h2 class="title">Виртуальный<br>конструктор ковриков</h2>
      <div class="step">ШАГ 2 из 4</div>
      <strong class="description">Следующий шаг - персонализация, подбор цветовой гаммы Ваших будущих ковриков</strong>
      <image-svg
        :mainColor="getMainColor"
        :borderColor="getSecondaryColor"
        class="mobile"
      />
      <v-select
        :options="mainColors"
        :class="{'active': selectedMainColor, 'error': !selectedMainColor}"
        v-model="selectedMainColor"
        placeholder="Цвет полимера"
      />
      <v-select
        :options="secondaryColors"
        :class="{'active': selectedSecondaryColor, 'error': !selectedSecondaryColor}"
        v-model="selectedSecondaryColor"
        placeholder="Цвет канта"
      />
      <div class="flex">
        <button
          class="button-prev"
          @click.prevent="prev">Вернуться назад
        </button>
        <button
          class="button"
          :class="{disabled: disabled}"
          @click.prevent="sendData"
        >Дальше
        </button>
      </div>
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
      selectedSecondaryColor: null,
      validate: false
    }
  },
  mounted() {
    this.mainColors = Object.keys(colors.main)
    this.secondaryColors = Object.keys(colors.secondary)
  },
  methods: {
    ...mapMutations(['next', 'prev', 'setColor']),
    sendData() {
      if (this.selectedMainColor && this.selectedSecondaryColor) {
        this.validate = false
        this.setColor([this.selectedMainColor, this.selectedSecondaryColor])
        this.next()
        if(document.getElementById("rec140931884")) {
          document.getElementById("rec140931884").scrollIntoView({block: "start", behavior: "smooth"})
        }
      }
      else {
        this.validate = true
      }
    }
  },
  computed: {
    disabled: {
      get() {
        return this.selectedMainColor && this.selectedSecondaryColor ? false : true
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
    margin-top: 0;

    &:first-child {
      margin-right: 20px;
    }
  }

  .flex {
    display: flex;
  }
</style>