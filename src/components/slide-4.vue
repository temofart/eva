<template>
  <div class="slide column-2">
    <div class="column">
      <h2>Виртуальный<br>конструктор ковриков</h2>
      <div class="step">ШАГ 4 из 4</div>
      <strong class="description">Последний шаг – определение сроков пошива и одного из 4 способов оплаты. Заполните форму для связи с консультантом</strong>
      <input class="input" type="text" placeholder="Имя" v-model="name">
      <input class="input" type="text" placeholder="Телефон" v-model="phone">
      <button @click.prevent="sendData" :disabled="!allowNext || loading">{{finalText}}</button>
    </div>
    <div class="column">
      <div class="features">
        <div class="feature">
          <div class="icon-1"/>
          <div>Гарантия эксплуатации 12 месяцев</div>
        </div>
        <div class="feature">
          <div class="icon-2"/>
          <div>Доставка по Украине в течение 2 дней</div>
        </div>
        <div class="feature">
          <div class="icon-3"/>
          <div>Мгновенная рассрочка платежа</div>
        </div>
        <div class="feature">
          <div class="icon-4"/>
          <div>Пошив от 1 до 3 дней </div>
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
      loading: false
    }
  },
  methods: {
    ...mapMutations(['setPersonal']),
    sendData() {
      this.setPersonal([this.name, this.phone])
      this.getAllInfo()
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.finalText = 'Спасибо за заявку!'
      }, 1000);
    },
    getAllInfo() {
      const kit = this.$store.state.kit
      const info = {
        'Имя и телефон': this.$store.state.personal,
        'Марка и модель авто': this.$store.state.carModel,
        'Цвет основной и дополнительный': this.$store.state.colors,
        'Набор': this.$store.state.kits[kit].title,
        'Цена': this.$store.state.kits[kit].price,
        'Подпятник': this.$store.state.kits[kit].pyatnik.is,
        'Шильды': this.$store.state.kits[kit].shildi.is,
        'Колво': this.$store.state.kits[kit].shildi.count
      }
      const name = function() {
        return `${info['Имя и телефон']}`
      }
      const car = function() {
        return `${info['Марка и модель авто'][0]} - ${info['Марка и модель авто'][1]}`
      }
      const color = function() {
        return `${info['Цвет основной и дополнительный'][0]}, ${info['Цвет основной и дополнительный'][1]}`
      }
      const kits = function() {
        return `${info['Набор']}, Подпятник: ${info['Подпятник'] ? 'Да' : 'Нет'}, Шильды: ${info['Шильды'] ? 'Да - ' : 'Нет'}, ${info['Шильды'] && info['Колво'] !== null ? `${info['Колво']}` : ''}`
      }
      const message = [name(), car(), color(), kits()]
      window.parent.postMessage(message, "*")
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
  button {
    margin-top: 70px;
  }
  .input {
    width: 100%;
    display: block;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 15px;
    display: flex;
    height: 34px;
    align-items: center;
    outline: none;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    padding: 50px;

    .feature {
      width: 50%;

      [class^=icon] {
        width: 50px;
        height: 50px;
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 10px auto;
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

</style>