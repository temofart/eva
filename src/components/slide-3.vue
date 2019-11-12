<template>
  <div class="slide">
    <h2>Виртуальный<br>конструктор ковриков</h2>
    <div class="step">ШАГ 3 из 4</div>
    <strong class="description">Следующий шаг- выбор комплекта и подбор дополнительных аксессуаров</strong>
    <div class="choose">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        @click.stop="modal(item, index)"
        class="item"
        :class="{'active': index === activeItem}"
      >{{item}}</div>
    </div>
    <button @click.prevent="sendData" :disabled="!allowNext">Дальше</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'slide-3',
  data() {
    return {
      choosen: null,
      value: null,
      items: ['Эконом', 'Стандарт', 'Премиум', 'Премиум плюс', 'Платинум', 'VIP'],
      activeItem: null
    }
  },
  methods: {
    ...mapMutations(['next', 'openModal']),
    sendData() {
      this.next()
    },
    modal(val, id) {
      if (val === 'Эконом') this.value = 'econom'
      if (val === 'Стандарт') this.value = 'standart'
      if (val === 'Премиум') this.value = 'premium'
      if (val === 'Премиум плюс') this.value = 'premiumPlus'
      if (val === 'Платинум') this.value = 'platinum'
      if (val === 'VIP') this.value = 'vip'
      this.openModal(this.value)
      this.activeItem = id
    }
  },
  computed: {
    allowNext: {
      get() {
        return (this.activeItem !== null) ? true : false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .choose {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 100px;
      height: 100px;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      text-align: center;

      &:hover {
        border: 1px solid red;
      }

      &:not(:last-child) {
        margin-right: 20px;
      }

      &.active {
        border: 2px solid rgb(5, 206, 5);
      }
    }
  }
</style>