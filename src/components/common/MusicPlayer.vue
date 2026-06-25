<!-- Floating background-music toggle para sa demos. Off by default (hindi autoplay). -->
<script setup>
import { ref, onBeforeUnmount } from 'vue'

const props = defineProps({
  // Filename lang sa public/audio/, hal. "demo-song.mp3"
  src: { type: String, required: true },
})

const audio = ref(null)
const playing = ref(false)
// Tama ang path kahit naka-deploy sa /flow/ (GitHub Pages) o sa root.
const fileUrl = `${import.meta.env.BASE_URL}audio/${props.src}`

function toggle() {
  const el = audio.value
  if (!el) return
  if (playing.value) {
    el.pause()
    playing.value = false
  } else {
    el.volume = 0.5
    el.play().then(() => { playing.value = true }).catch(() => { playing.value = false })
  }
}

onBeforeUnmount(() => {
  if (audio.value) audio.value.pause()
})
</script>

<template>
  <div class="fixed bottom-5 right-5 z-50">
    <audio ref="audio" :src="fileUrl" loop preload="none" />
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
      <!-- Music note (paused) -->
      <svg
        v-if="!playing"
        class="relative h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M9 9v8.25M9 9l10.5-3v8.25M9 17.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm10.5-1.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
      <!-- Sound bars (playing) -->
      <svg
        v-else
        class="relative h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M6 10v4M10 6v12M14 8v8M18 10v4" />
      </svg>
    </button>
  </div>
</template>
