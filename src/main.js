import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// Vue.directive("size", {
//     bind(el, binding){
//         if(binding.value == 'small'){
//             el.style.fontSize="20px"
//         }
//         else if(binding.value == 'big'){
//             el.style.fontSize="60px"
//         }else{
//             el.style.fontSize="40px"
//         }
//     }
// })

createApp(App).mount('#app')
