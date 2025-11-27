import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './styles/main.css'
import Lenis from '@studio-freight/lenis'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const lenis = new Lenis({
    duration: 1.2,          // qué tan "larga" es la animación del scroll
    smoothWheel: true,      // suaviza scroll con rueda/mousepad (si tu versión lo soporta)
    smoothTouch: true       // suaviza en touch
})

// Loop de animación
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)