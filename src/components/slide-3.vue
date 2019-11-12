<template>
  <div class="slide">
    <h2>Виртуальный<br>конструктор ковриков</h2>
    <div class="step">ШАГ 3 из 4</div>
    <strong class="description">Следующий шаг - выбор комплекта и подбор дополнительных аксессуаров</strong>
      <div class="choose">
        <div
          v-for="(item, id) in getKits"
          :key="id"
          class="item"
        >
          <h3 class="title">{{item.title}}</h3>
          <div class="accessuar">
            <div class="acc-title">Аксессуары</div>
            <div class="acc-desc">скидка не распространяется</div>
            <img src="" alt="" />
            <div class="options" v-if="item.pyatnik || item.shildi">
              <div class="option">
                <input type="checkbox" @change="calc(id, item, 'pyatnik')">
                <label>Подпятник</label>
              </div>
              <div class="option">
                <input type="checkbox" @change="calc(id, item, 'shilda')">
                <label>Шильды</label>
                <v-select
                  :options="['1', '2', '3', '4', '5']"
                  @input="setShildaCount([$event, id])"
                  :disabled="isSelectDisabled(id)"
                />
              </div>
            </div>
            <div class="complete">
              <div class="price">{{getPrice(id)}}</div>
              <div
                @click.prevent="sendData(item)"
                class="button"
              >Выбрать комплект</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: 'slide-3',
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations(['setOption', 'next', 'setKit', 'setShildaCount']),
    calc(id, item, which, value) {
      if (which === 'pyatnik') {
        this.setOption([id, 'pyatnik'])
      }
      if (which === 'shilda') {
        this.setOption([id, 'shilda'])
      }
    },
    sendData(obj) {
      this.setKit(obj)
      this.next()
    }
  },
  computed: {
    ...mapGetters(['getKits', 'getPrice', 'isSelectDisabled']),
  }
}
</script>

<style lang="scss" scoped>
  .choose {
    display: flex;
    flex-wrap: wrap;

    .item {
      max-width: calc(33.3% - 20px);
      width: 100%;
      margin-bottom: 20px;
      min-height: 590px;
      box-shadow: 0px 2px 20px 0px #e0e0e0d1;
      border: 1px solid transparent;
      padding: 26px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      cursor: pointer;
      transition: all .5s ease;

      &:hover {
        border: 1px solid #e40004;
      }

      &:not(:last-child) {
        margin-right: 20px;
      }

      &.active {
        border: 2px solid rgb(5, 206, 5);
      }

      .title {
        font-size: 26px;
        margin: 0;
        padding: 0;
      }
    }
  }
</style>