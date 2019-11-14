<template>
  <div id="constructor">
    <transition name="fade" mode="out-in">
      <keep-alive>
          <component :is="`slide-${currentSlide}`" />
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <modal-info v-if="$store.state.modalInfo" />
    </transition>
    <transition name="fade" mode="out-in">
      <modal-pyatnik v-if="$store.state.modalPyatnik" />
    </transition>
    <transition name="fade" mode="out-in">
      <modal-shildi v-if="$store.state.modalShildi" />
    </transition>
    <transition name="fade" mode="out-in">
      <modal-privat v-if="$store.state.modalPrivat" />
    </transition>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'app',
  computed: {
    currentSlide: {
      get() {
        return this.$store.state.currentSlide
      }
    },
    allowPrev: {
      get() {
        return this.$store.state.currentSlide !== 1 ? true : false
      }
    }
  },
  methods: {
    ...mapMutations(['next', 'prev'])
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/media.scss";

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  @font-face {
    font-family: "Averta";
    src : url("./assets/fonts/AvertaDemoPECuttedDemo-Regular.otf");
  }

  * {
    font-family: "Averta";
  }

  @import "vue-select/src/scss/vue-select.scss";

  .modal-overlay {
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      min-height: 100vh;
      background: rgba(0, 0, 0, 0.6);
      z-index: 9999;
    }
  }

  .modal-wrapper {
    width: 100%;
    position: fixed;
    z-index: 99999;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    min-height: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 10px 0;
  }

  #rec140931901 {
    position: fixed;
    right: -9999999px;
    z-index: -1;
    visibility: hidden;
  }

  #constructor {
    max-width: 1100px;
    margin: 100px auto;

    * {
      box-sizing: border-box;
    }
  }

  .column-2 {
    display: flex;

    .column {
      display: block;
      width: 50%;
    }
  }

  .description {
    display: block;
    margin: 20px 0;
  }

  .v-select {
    margin-bottom: 20px;
    font-size: 14px !important;
    cursor: pointer;

    &.active {
      .vs__dropdown-toggle {
        border: 1px solid #d20004;
      }
    }

    input {
      font-size: 12px;
      color: rgb(161, 161, 161);
      margin: 0 !important;
      padding: 0;
      min-height: 34px;

      &:focus {
        font-size: 12px;
      }
    }

    .vs__dropdown-toggle {
      padding: 0;
    }

    .vs__dropdown-menu {
      padding: 5px 0 !important;
      min-width: auto;
    }

    .vs__selected-options {
      min-height: 34px;
      width: 100%;
      padding: 0;
      padding-left: 10px;
    }

    .vs__clear {
      display: none;
    }

    .vs__open-indicator {
      transform: scale(0.7);
    }

    .vs__selected {
      font-weight: bold;
      min-height: 34px;
      margin: 0;
    }

    .vs__search {
      padding-left: 0;
    }

    .vs__actions {
      padding: 0;
      padding-right: 8px;
    }
  }

  .step {
    font-size: 12px;
    color: rgb(168, 168, 168);
  }

  .title {
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 40px;
  }

  .button {
    border: 0;
    background: none;
    outline: none;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1.2px;
    font-weight: bold;
    color: #d20004;
    margin: 0;
    padding: 12px 0;
    cursor: pointer;
    user-select: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: -25px;
      top: 50%;
      transform: translateY(-50%);
      background: url('./assets/arrow.svg') no-repeat center center / cover;
      width: 12px;
      height: 7px;
      display: block;
      transition: all .2s ease;
    }

    &:hover {
      &::after {
        right: -30px;
      }
    }

    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;

      &::after {
        right: -25px;
      }
    }
  }

  .button-prev {
    font-size: 12px;
    color: #999;
    text-transform: uppercase;
    margin-top: 30px;
    display: block;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
    outline: none;
  }
</style>
