import axios from 'axios'

axios.defaults.baseURL = 'http://komik.yudharta.ac.id/api/get.php'

export default async ({ Vue }) => {
  Vue.prototype.$axios = axios
}
