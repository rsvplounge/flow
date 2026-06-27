<!-- Floating background-music toggle para sa demos. Umiikot ang button habang tumutugtog. -->
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
// Naka-import mula src/assets — bina-bundle ni Vite (gumagana kahit sa /flow/ GitHub Pages).
import songUrl from '@/assets/mp3/song.mp3'

defineProps({
  // Para sa aria-label lang; iisa ang audio file (song.mp3) sa lahat ng demo.
  src: { type: String, default: '' },
})

const audio = ref(null)
const playing = ref(false)

// Module-level singleton — iisang audio lang ang puwedeng tumugtog sa isang
// pagkakataon. Pinipigilan nito ang dobleng tunog (hal. sa Vite HMR o mabilisang
// paglipat ng page kung saan nag-overlap ang luma at bagong instance).
let currentEl = null
function claimPlayback(el) {
  if (currentEl && currentEl !== el) {
    currentEl.pause()
  }
  currentEl = el
}

function start(el) {
  claimPlayback(el)
  el.volume = 0.5
  el.play().then(() => { playing.value = true }).catch(() => { playing.value = false })
}

function toggle() {
  const el = audio.value
  if (!el) return
  if (playing.value) {
    el.pause()
    playing.value = false
  } else {
    start(el)
  }
}

// Subukang auto-play pagkarating sa page (madalas i-block ng browser hangga't
// walang user interaction — kaya may fallback sa manual click).
onMounted(() => {
  if (audio.value) start(audio.value)
})

onBeforeUnmount(() => {
  if (audio.value) {
    audio.value.pause()
    if (currentEl === audio.value) currentEl = null
  }
})

// Linisin ang stale na audio tuwing mag-hot-reload ang module sa dev.
if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    if (currentEl) { currentEl.pause(); currentEl = null }
  })
}
</script>

<template>
  <div class="fixed bottom-5 right-5 z-50">
    <audio ref="audio" :src="songUrl" loop preload="auto" />
    <button
      type="button"
      @click="toggle"
      class="group relative flex h-12 w-12 items-center justify-center rounded-full bg-cream/90 text-sage-deep shadow-lg ring-1 ring-sage/20 backdrop-blur transition hover:bg-cream"
      :aria-label="playing ? 'Pause music' : 'Play music'"
    >
      <!-- Pulsing ring kapag tumutugtog -->
      <span
        v-if="playing"
        class="absolute inset-0 animate-ping rounded-full bg-sage/30"
        aria-hidden="true"
      />
      <!-- Umiikot na disc + music note habang playing; tigil kapag paused -->
      <svg
        class="relative h-6 w-6"
        :class="playing ? '[animation:spin_3.5s_linear_infinite]' : ''"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <!-- vinyl disc -->
        <circle cx="12" cy="12" r="9.25" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
        <!-- music note sa loob -->
        <path d="M10.5 9.2v4.6M10.5 9.2l4-1.1v4.6" />
        <path d="M10.5 13.8a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm4-1.1a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z" />
      </svg>
    </button>
  </div>
</template>
