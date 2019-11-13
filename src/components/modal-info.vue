<template>
  <div class="modal modal-info" v-click-outside="modalInfo">
    <div class="close-modal" @click="modalInfo"/>
    <h2 class="title">Комплект {{currentKit.title}} <span class="red">{{currentKit.price}} грн</span></h2>
    <div class="modal-content">
      <img src="../assets/image-info.png" alt="">
      <ul>
        <li>Передние или задние с перемычкой</li>
        <li>Коврик в багажник</li>
        <li>Гарантия 12 мес</li>
        <li>Гарантия от 6 до 12 мес</li>
        <li>Срок пошива 5-7 дней</li>
        <li>Оригинальные крепления + система липучек</li>
        <li>Бесплатная доставка</li>
        <li>Пакет документов</li>
        <li>рассрочка {{ Math.floor(currentKit.price / 4)}} грн х 4 платежа</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'modal-info',
  methods: {
    ...mapMutations(['modalInfo'])
  },
  computed: {
    ...mapGetters(['currentKit'])
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
  padding: 30px 40px;
  width: 80%;
  max-width: 800px;
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
    opacity: 0.1;
    transition: opacity .2s ease;

    &:hover {
      opacity: 0.3;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;

    ul {
      padding: 0;
      margin: 0;

      li {
        display: inline-block;
        width: 50%;
        font-size: 14px;
        margin-bottom: 20px;
        padding-left: 50px;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          left: 3px;
          top: 3px;
          width: 12px;
          height: 12px;
          display: block;
          z-index: 1;
          background: url('../assets/check-green.svg') no-repeat center center / contain;
        }
      }
    }
  }

  &.modal-info {
    .title {
      margin: 0;
      font-weight: normal;

      .red {
        color: #d20004;
        margin-left: 5px;
      }
    }

    img {
      width: 100%;
      max-width: 100%;
      margin: 20px 0;
    }
  }
}
</style>