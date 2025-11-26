<script setup>
import ProductModel from '../components/ChairViewer.vue'

const blocks = [
  {
    kicker: 'Comfort',
    title: 'Pensada para maratones de juego',
    text: 'Espuma de alta densidad, soporte lumbar y cabecera ajustable.',
    textTwo: 'Texto de prueba '
  },
  {
    kicker: 'Performance',
    title: 'Reclinación total y estabilidad',
    text: 'Reclinación hasta 180° con base reforzada y pistón clase 4.'
  },
  {
    kicker: 'RGB',
    title: 'Iluminación que acompaña tu setup',
    text: 'Tiras RGB integradas con control remoto y efectos dinámicos.'
  }
]
</script>

<template>
  <section class="text-white">
    <div
      class="container mx-auto px-4 lg:px-10
             grid gap-10
             lg:grid-cols-[1.9fr,1.9fr]"
    >
      <div
        class="flex items-center justify-center
               h-[320px] sm:h-[420px]
               lg:sticky lg:top-0 lg:h-screen"
      >
        <div class="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[560px] lg:h-[420px]">
          <ProductModel />
        </div>
      </div>

      <div
        class="pt-6 sm:pt-10
               space-y-16 lg:space-y-40
               lg:pr-16"
      >
        <article
          v-for="(block, index) in blocks"
          :key="index"
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

                    <p
            class="mt-5 text-sm md:text-base lg:text-lg
                   text-zinc-300 leading-relaxed"
          >
            {{ block.textTwo }}
          </p>

        </article>
      </div>
    </div>
  </section>
</template>
