<template>
  <div id="constructor">
    <keep-alive>
      <transition name="fade" mode="out-in">
        <component :is="`slide-${currentSlide}`" />
      </transition>
    </keep-alive>
    <modal />
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
      z-index: 999;
    }
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

    &.active {
      .vs__dropdown-toggle {
        border: 1px solid #d20004;
      }
    }

    input {
      font-size: 12px;
      color: rgb(161, 161, 161);
      margin: 0 !important;
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
    }

    .vs__selected-options {
      min-height: 34px;
      padding: 0 12px;
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
  }

  .step {
    font-size: 12px;
    color: rgb(168, 168, 168);
  }

  .title {
    font-size: 30px;
  }

  button {
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

    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
</style>
