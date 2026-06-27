<!-- Opening "You're Invited" splash — bubukas ang invitation (wow effect). -->
<script setup>
import { ref } from 'vue'

defineProps({
  couple: { type: String, required: true },
  image: { type: String, required: true },
})
const emit = defineEmits(['open'])

const show = ref(true)
function open() {
  show.value = false
  emit('open')
}
</script>

<template>
  <Transition name="intro">
    <div
      v-if="show"
      class="fixed inset-0 z-[90] flex items-center justify-center overflow-hidden"
    >
      <img :src="image" alt="" class="absolute inset-0 h-full w-full object-cover animate-kenburns" />
      <div class="absolute inset-0 bg-gradient-to-b from-sage-deep/85 via-sage-deep/72 to-sage-deep/88" aria-hidden="true" />

      <div class="relative max-w-xl px-6 text-center text-cream">
        <p class="font-script text-2xl text-cream/90 sm:text-3xl">together with our families</p>
        <h1 class="mt-4 font-script text-6xl leading-[1.05] sm:text-8xl">{{ couple }}</h1>
        <div class="mx-auto my-7 flex w-fit items-center gap-3 text-cream/70" aria-hidden="true">
          <span class="h-px w-12 bg-cream/50" /><span class="text-sm">✦</span><span class="h-px w-12 bg-cream/50" />
        </div>
        <p class="text-xs uppercase tracking-[0.3em] text-cream/85">request the pleasure of your company</p>

        <button
          type="button"
          class="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-cream px-9 py-4 text-sm font-medium tracking-wide text-sage-deep shadow-xl transition hover:bg-rosedust hover:text-cream"
          @click="open"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5 transition-transform group-hover:-translate-y-0.5" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75m19.5 0-8.69 5.35a2.25 2.25 0 0 1-2.37 0L2.25 6.75" />
          </svg>
          Open Invitation
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.intro-leave-active {
  transition:
    opacity 0.9s ease,
    transform 0.9s ease;
}
.intro-leave-to {
  opacity: 0;
  transform: translateY(-40px) scale(1.03);
}
</style>
