<template>
  <div
    v-if="isModal"
    v-click-outside="hide"
    class="modal"
  >
    <div class="close-modal" @click="hide" />
    <div class="modal-content">
      <div class="image"></div>
      <div class="info">
        <div class="original">100% оригинал</div>
        <h2>Комплект {{kit.title}}</h2>
        <h4>Аксессуары</h4>
        <span class="no-sale">скидка не распространяется</span>
        <div class="items">
          <div class="item">
            <input type="checkbox" id="pyatnik" v-model="pyatnik" @change="calc">
            <label>Подпятник</label>
          </div>
          <div class="item">
            <input type="checkbox" id="shilda" v-model="shilda" @change="calc">
            <label>Шильды</label>
            <v-select
              v-model="shilda_count"
              :options="['1', '2', '3', '4', '5']"
              :disabled="!shilda"
              @input="calc"
            />
          </div>
        </div>
        <div class="complete">
          <div class="price">{{kit.price + kitsPrice}}</div>
          <div class="button" @click="hide">Выбрать комплект</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapMutations } from 'vuex'
export default {
  name: "modal",
  data() {
    return {
      pyatnik: false,
      shilda: false,
      shilda_count: null,
      kitsPrice: 0
    }
  },
  methods: {
    ...mapMutations(['closeModal', 'setKits']),
    hide() {
      if (this.isModal) {
        this.closeModal()
        const value = this.$store.state.kit
        const price = this.kitsPrice + this.kit.price
        this.setKits([
          value,
          this.pyatnik,
          this.shilda,
          this.shilda_count,
          price
        ])
      }
    },
    calc() {
      if (this.pyatnik && this.shilda) {
        if(!this.shilda_count) this.shilda_count = 1
        return this.kitsPrice = (this.$store.state.shildaPrice * this.shilda_count) + this.$store.state.pyatnikPrice
      }

      if (this.pyatnik || this.shilda) {
        if (this.pyatnik) this.kitsPrice = this.$store.state.pyatnikPrice
        else {
          if(!this.shilda_count) this.shilda_count = 1
          return this.kitsPrice = this.$store.state.shildaPrice * this.shilda_count
        }
      }

      else {
        return this.kitsPrice = 0
      }
    }
  },
  computed: {
    isModal: {
      get() {
        return this.$store.state.isModal
      }
    },
    kit: {
      get() {
        let value = this.$store.state.kit
        return this.$store.state.kits[value]
      }
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 1000;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fefefe;
  padding: 40px;
  width: 80%;
  max-width: 700px;
  min-height: 300px;

  .close-modal {
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background: url('../assets/close-button.svg') no-repeat center center / cover;
    opacity: 0.2;
    transition: opacity .2s ease;

    &:hover {
      opacity: 0.4;
    }
  }

  &-content {
    display: flex;
  }

  .image {
    width: 40%;
    margin-right: 20px;
  }

  .info {
    width: 60%;
  }

  .items {
    display: flex;
    align-items: center;
    margin-bottom: 100px;

    .item {
      display: flex;
      align-items: center;
      flex: 1;

      .v-select {
        width: 100%;
        margin: 0;
        margin-left: 15px;
      }
    }
  }

  .complete {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      font-size: 24px;
    }

    .button {
      cursor: pointer;
    }
  }
}
</style>