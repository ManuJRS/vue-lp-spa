<script setup>
import ProductModel from '../components/ChairViewer.vue'
import { ref, computed, onMounted } from 'vue'
import { useWindowScroll, useIntersectionObserver } from '@vueuse/core'

const blocks = [
  {
    kicker: 'Comfort',
    titleProfit: 'Tu mejor opción',
    title: 'Pensada para maratones de juego',
    text: 'Espuma de alta densidad, soporte lumbar y cabecera ajustable.'
  },
  {
    kicker: 'Performance',
    titleProfit: 'Rendimiento extremo',
    title: 'Reclinación total y estabilidad',
    text: 'Reclinación hasta 180° con base reforzada y pistón clase 4.'
  },
  {
    kicker: 'RGB',
    titleProfit: 'Para más FPS, hazlo tryhard',
    title: 'Iluminación que acompaña tu setup',
    text: 'Tiras RGB integradas con control remoto y efectos dinámicos.'
  }
]

const activeIndex = ref(0)
const articleRefs = ref([])

const setArticleRef = (el) => {
  if (el) articleRefs.value.push(el)
}

onMounted(() => {
  articleRefs.value.forEach((el, index) => {
    useIntersectionObserver(
      el,
      ([entry]) => {
        if (entry.isIntersecting) {
          activeIndex.value = index
        }
      },
      {
        threshold: 0.5
      }
    )
  })
})

const { y } = useWindowScroll()

const fadeOpacity = computed(() => {
  if (typeof window === 'undefined') return 1

  const sectionHeight = window.innerHeight || 800

  const blockCenter = activeIndex.value * sectionHeight + sectionHeight / 2

  const distance = Math.abs(y.value + sectionHeight / 2 - blockCenter)

  const fadeDistance = sectionHeight * 0.4

  const t = Math.min(distance / fadeDistance, 1)

  return 1 - t
})

const currentBlock = computed(() => blocks[activeIndex.value] ?? blocks[0])
</script>


<template>
  <section class="text-white">
    <div
      class="container mx-auto grid gap-12
             lg:grid-cols-[1.9fr,1.9fr] px-4 lg:px-8"
    >
      <div
        class="flex items-center justify-center
               h-[360px] sm:h-[420px]
               lg:sticky lg:top-0 lg:h-screen"
      >
        <div class="relative w-[320px] h-[360px] lg:w-[620px] lg:h-[820px]">
          <h2
            :style="{ opacity: fadeOpacity }"
            class="font-semibold uppercase tracking-widest
                   title_left lg:text-6xl z-20
                   absolute left-0 top-0
                   transition-opacity duration-500 ease-out"
          >
            {{ currentBlock.titleProfit }}
          </h2>

          <ProductModel class="mt-20" />
        </div>
      </div>

      <div
        class="pt-10 space-y-[70vh] lg:space-y-[80vh] max-w-xl lg:max-w-2xl"
      >
        <article
          v-for="(block, index) in blocks"
          :key="index"
          :ref="setArticleRef"
          class="max-w-xl md:max-w-2xl lg:h-screen"
        >
          <p
            class="text-[11px] md:text-xs
                   uppercase tracking-[0.25em]
                   text-indigo-400 mb-2"
          >
            {{ block.kicker }}
          </p>

          <h2
            class="text-2xl md:text-3xl lg:text-4xl
                   font-semibold mb-3
                   leading-tight"
          >
            {{ block.title }}
          </h2>

          <p
            class="text-sm md:text-base lg:text-lg
                   text-zinc-300 leading-relaxed"
          >
            {{ block.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>


