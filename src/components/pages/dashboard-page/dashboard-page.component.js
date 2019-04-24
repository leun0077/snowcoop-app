import mapView from '../../shared/map-view/map-view.component.vue'
export default {
  name: 'dashboardPage',
  components: {
    mapView
  },
  data() {
    return {
      addressList: null
    }
  },
  computed: {
    isLogIn() {
      return this.$store.getters.IS_LOGIN
    }
  },
  mounted() {
    /* eslint-disable */

    console.log('mounted...')
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
      this.addressList = addressList
      /* eslint-disable */
      console.log(addressList)
    })
  }
}
