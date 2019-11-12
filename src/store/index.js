import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSlide: 1,
    carModel: [],
    colors: [],
    personal: '',
    isModal: false,
    kit: '',
    pyatnikPrice: 450,
    shildaPrice: 150,
    totalPrice: null,
    kits: {
      econom: {
        title: 'Эконом',
        price: 910,
        pyatnik: {
          is: false,
          title: 'Подпятник',
          price: 150
        },
        shildi: {
          is: false,
          title: 'Шильды',
          price: 150,
          count: null
        }
      },
      standart: {
        title: 'Стандарт',
        price: 1010,
        pyatnik: {
          is: false,
          title: 'Подпятник',
          price: 150
        },
        shildi: {
          is: false,
          title: 'Шильды',
          price: 150,
          count: null
        }
      },
      premium: {
        title: 'Премиум',
        price: 1110,
        pyatnik: {
          is: false,
          title: 'Подпятник',
          price: 150
        },
        shildi: {
          is: false,
          title: 'Шильды',
          price: 150,
          count: null
        }
      },
      premiumPlus: {
        title: 'Премиум Плюс',
        price: 1210,
        pyatnik: {
          is: false,
          title: 'Подпятник',
          price: 150
        },
        shildi: {
          is: false,
          title: 'Шильды',
          price: 150,
          count: null
        }
      },
      platinum: {
        title: 'Платинум',
        price: 1310,
        pyatnik: {
          is: false,
          title: 'Подпятник',
          price: 150
        },
        shildi: {
          is: false,
          title: 'Шильды',
          price: 150,
          count: null
        }
      },
      vip: {
        title: 'VIP',
        price: 1410,
        pyatnik: {
          is: false,
          title: 'Подпятник',
          price: 150
        },
        shildi: {
          is: false,
          title: 'Шильды',
          price: 150,
          count: null
        }
      }
    }
  },
  mutations: {
    next(state) {
      state.currentSlide++
    },
    prev(state) {
      state.currentSlide--
    },
    setCar(state, [brand, model]) {
      state.carModel = [brand, model]
    },
    setColor(state, [main, secondary]) {
      state.colors = [main, secondary]
    },
    setKit(state, kit) {
      state.kit = kit
    },
    setPersonal(state, [name, phone]) {
      state.personal = [name, phone]
    },
    openModal(state, kit) {
      state.isModal = true
      state.kit = kit
      document.body.classList.add('modal-overlay')
    },
    closeModal(state) {
      state.isModal = false
      document.body.classList.remove('modal-overlay')
    },
    setKits(state, [kit, pyatnik, shilda, count, totalPrice]) {
      const set = state.kits[kit]
      if(pyatnik) set.pyatnik.is = true
      if(shilda && count) {
        set.shildi.is = true
        set.shildi.count = count
      }
      state.totalPrice = totalPrice
    }
  }
})