<template>
  <div class="slide slide-4 column-2" :class="{'submitted': submitted}">
    <div class="final" v-if="submitted">
      <button class="button button-final">Спасибо за заявку, {{this.$store.state.personal[0]}}!</button>
      <div class="description">Мы свяжемся с вами в ближайшее время, чтобы обсудить коврики, которые уже ждет ваш автомобиль {{this.$store.state.carModel[0]}} {{this.$store.state.carModel[1]}}.</div>
    </div>
    <template v-if="!submitted">
      <div class="column">
        <h2 class="title">Виртуальный<br>конструктор ковриков</h2>
        <div class="step">ШАГ 4 из 4</div>
        <template v-if="!submitted">
          <strong class="description">Последний шаг – определение сроков пошива и одного из 4 способов оплаты. Заполните форму для связи с консультантом</strong>
          <input class="input" type="text" placeholder="Имя" v-model="name">
          <input class="input" type="number" placeholder="Телефон" v-model="phone">
          <input
            type="checkbox"
            id="agree"
            @change="agree = !agree"
            class="input"
          >
          <label
            for="agree"
            class="label"
            data-text="Даю согласие на обработку персональных данных"
          />
          <button v-if="!submitted" class="button" @click.prevent="sendData" :disabled="!allowNext || loading">Жду звонка</button>
          <button
            class="button-prev"
            @click.prevent="prev">Вернуться назад
          </button>
        </template>
      </div>
    </template>
    <transition name="fade" mode="out-in">
      <div class="column">
        <div class="features">
          <div class="feature">
            <div class="icon-1"/>
            <div>Гарантия эксплуатации<br>12 месяцев</div>
          </div>
          <div class="feature">
            <div class="icon-2"/>
            <div>Доставка по Украине<br>в течение 2 дней</div>
          </div>
          <div class="feature">
            <div class="icon-3"/>
            <div>Мгновенная<br>рассрочка платежа</div>
          </div>
          <div class="feature">
            <div class="icon-4"/>
            <div>Пошив<br>от 1 до 3 дней </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'slide-4',
  data() {
    return {
      name: '',
      phone: '',
      finalText: 'Жду звонка',
      loading: false,
      submitted: false,
      agree: false
    }
  },
  methods: {
    ...mapMutations(['setPersonal', 'prev']),
    sendData() {
      this.setPersonal([this.name, this.phone])
      this.getAllInfo()
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.submitted = true
      }, 1000);
    },
    getAllInfo() {
      const kit = this.$store.state.kit
      const total = this.$store.state.totalPrice
      const info = {
        personal: `${this.$store.state.personal[0]}, ${this.$store.state.personal[1]}`,
        car: `${this.$store.state.carModel[0]}, ${this.$store.state.carModel[1]}, ${this.$store.state.carModel[2]}`,
        color: `${this.$store.state.colors[0]}, ${this.$store.state.colors[1]}`,
        options: function() {
          if ("pyatnik" in kit) {
            var output = `Комплект: ${kit.title}; Сумма заказа: ${total}`
            if (kit.pyatnik.is) {
              output += "Подпятник: Да. "
            }
            else {
              output += "Подпятник: Нет, "
            }
            if (kit.shildi.is) {
              output += `Шильды: Да - ${kit.shildi.count}шт.`
            }
            else {
              output += "Шильды: Нет."
            }
            return output
          }
          else {
            return `Комплект: ${kit.title}; Подпятник и Шильды - Нет`
          }
        }
      }
      const message = [info.personal, info.car, info.color, info.options()]

      if (
        document.querySelector('div[data-input-lid="1493283059688"] input') &&
        document.querySelector('div[data-input-lid="1573456678439"] input') &&
        document.querySelector('div[data-input-lid="1573456688066"] input') &&
        document.querySelector('div[data-input-lid="1573456705570"] input')
      ) {
        document.querySelector('div[data-input-lid="1493283059688"] input').value = message[0]
        document.querySelector('div[data-input-lid="1573456678439"] input').value = message[1]
        document.querySelector('div[data-input-lid="1573456688066"] input').value = message[2]
        document.querySelector('div[data-input-lid="1573456705570"] input').value = message[3]
        document.querySelector('.t-form__submit button').click()
      }
      else {
        return console.log('Нужных полей не найдено.')
      }

    }
  },
  computed: {
    allowNext: {
      get() {
        return this.name && this.phone && this.agree ? true : false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .column:first-child {
    padding-right: 10%;
  }

  .input {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 15px;
    display: flex;
    height: 44px;
    font-size: 15px;
    align-items: center;
    outline: none;
    box-shadow: none;
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    height: calc(100% - 151px);
    padding-top: 236px;

    .feature {
      max-height: 50px;
      width: 50%;
      display: flex;
      align-items: center;

      [class^=icon] {
        width: 40px;
        height: 40px;
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 10px 0;
        margin-right: 15px;
      }

      .icon-1 {
        background-image: url('../assets/icon-1.png');
      }
      .icon-2 {
        background-image: url('../assets/icon-2.png');
      }
      .icon-3 {
        background-image: url('../assets/icon-3.png');
      }
      .icon-4 {
        background-image: url('../assets/icon-4.svg');
      }
    }
  }

  .final {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 40%;
    margin-right: 10%;

    + .column .features {
      padding-top: 80px;
      height: 100%;
      transition: all .3s ease;
    }
  }

  .button-final {
    font-size: 26px;
    margin-top: 70px;
    word-wrap: word-break;
  }

  .button-final::after {
    display: none;
  }

  .input[type="checkbox"] {
    width: 0.1px;
    height: 0.1px;
    visibility: hidden;
    opacity: 0;
    display: inline-block;

    + .label {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-right: 10px;
      cursor: pointer;
      position: relative;
      font-size: 14px;
      margin-bottom: 20px;

      &::after {
        content: attr(data-text);
        position: relative;
        left: 30px;
        z-index: 1;
        white-space: nowrap;
        word-break: keep-all;

        @media (max-width: 400px) {
          top: -10px;
          display: inline-block;
          word-break: keep-all;
          white-space: normal;
          min-width: 220px;
          max-width: 240px;
        }
      }
    }

    &:checked {
      + .label {
        background: url('../assets/check.svg') no-repeat center center / 10px;
      }
    }
  }

  .submitted {
    margin: 300px 0;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      appearance: none !important;
  }
</style>