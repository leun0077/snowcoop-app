// importing map view from another location
import mapView from '../../shared/map-view/map-view.component.vue'
export default {
  // Getting map view to display
  name: 'dashboardPage',
  components: {
    mapView
  },
  data() {
    return {
      addressList: null
    }
  },
  // making sure user is logged in with token
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
