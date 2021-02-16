import Topbar1 from './components/topbar/Topbar1.vue'
import Topbar2 from './components/topbar/Topbar2.vue'
import Courses from './components/Courses.vue'
import Dashboard from './components/Dashboard.vue'
import Footer from './components/Footer.vue'
import Subcontent from './components/Subcontent.vue'

require('./bootstrap');
window.Vue = require('vue');

window.Vue.component('top-bar1', Topbar1)
window.Vue.component('top-bar2', Topbar2)
window.Vue.component('dashboard', Dashboard)
window.Vue.component('courses', Courses)
window.Vue.component('subfooter', Footer)
window.Vue.component('subcontent', Subcontent)

let app = new window.Vue({
  el: '#app'
})
