import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputMask from 'primevue/inputmask'
import Password from 'primevue/password'

import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Panel from 'primevue/panel'
import Dialog from 'primevue/dialog';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(PrimeVue, { ripple: true })
    nuxtApp.vueApp.use(ToastService)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('InputMask', InputMask)
    nuxtApp.vueApp.component('Password', Password)


    nuxtApp.vueApp.component('Toast', Toast),
    nuxtApp.vueApp.component('Panel', Panel)
    nuxtApp.vueApp.component('Dialog', Dialog)

    //other components that you need
})