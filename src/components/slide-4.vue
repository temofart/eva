<template>
  <div class="slide slide-4 column-2">
    <div class="column">
      <h2 class="title">Виртуальный<br>конструктор ковриков</h2>
      <div class="step">ШАГ 4 из 4</div>
      <template v-if="!submitted">
        <strong class="description">Последний шаг – определение сроков пошива и одного из 4 способов оплаты. Заполните форму для связи с консультантом</strong>
        <input class="input" type="text" placeholder="Имя" v-model="name">
        <input class="input" type="text" placeholder="Телефон" v-model="phone">
        <button v-if="!submitted" class="button" @click.prevent="sendData" :disabled="!allowNext || loading">Жду звонка</button>
        <button
          class="button-prev"
          @click.prevent="prev">Вернуться назад
        </button>
      </template>
      <button v-if="submitted" class="button final">Спасибо за заявку!</button>
    </div>
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
      submitted: false
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
    mounted() {
      document.getElementById('constructor').scrollIntoView();
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
        return this.name && this.phone ? true : false
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
  }

  .features {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    padding-top: 100px;
    font-size: 14px;

    .feature {
      width: 50%;

      [class^=icon] {
        width: 40px;
        height: 40px;
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 10px 0;
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
    font-size: 26px;
    margin-top: 70px;
  }

  .button.final::after {
    display: none;
  }
</style>