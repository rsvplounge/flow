<!-- "Time & Place" — event cards na naka-overlap sa bg photo, may modal na may map. -->
<script setup>
import { ref } from 'vue'
import MapEmbed from '@/components/invitation/MapEmbed.vue'
import LeafDivider from '@/components/common/LeafDivider.vue'

defineProps({
  bgImage: { type: String, required: true },
  events: { type: Array, required: true }, // {title, image, datetime, venue, address, mapQuery}
})

const active = ref(null) // index ng bukas na modal
</script>

<template>
  <section class="relative">
    <!-- Background band + title -->
    <div class="relative flex h-[55vh] items-start justify-center overflow-hidden sm:h-[60vh]">
      <img :src="bgImage" alt="" class="absolute inset-0 h-full w-full object-cover" />
      <div class="absolute inset-0 bg-sage-deep/55" aria-hidden="true" />
      <div class="relative z-10 mt-20 px-6 text-center text-cream sm:mt-24">
        <p class="text-xs font-medium uppercase tracking-[0.3em] text-cream/80">Getting There</p>
        <h2 class="mt-2 whitespace-nowrap font-display text-3xl font-light uppercase tracking-[0.12em] sm:text-5xl">Ceremony &amp; Venue</h2>
        <LeafDivider class="mx-auto mt-4 h-6 w-44 text-cream/80" />
      </div>
    </div>

    <!-- Overlapping cards -->
    <div
      class="relative z-20 mx-auto -mt-44 grid gap-6 px-6 pb-20 sm:-mt-48 sm:gap-8"
      :class="events.length === 2 ? 'max-w-3xl sm:grid-cols-2' : 'max-w-5xl sm:grid-cols-3'"
    >
      <article
        v-for="(ev, i) in events"
        :key="i"
        v-reveal="i * 100"
        class="overflow-hidden rounded-2xl bg-cream shadow-xl shadow-sage-deep/10"
      >
        <img :src="ev.image" alt="" loading="lazy" class="aspect-[4/3] w-full object-cover" />
        <div class="px-6 py-7 text-center">
          <h3 class="font-display text-2xl uppercase tracking-[0.1em] text-rosedust">{{ ev.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-bark/70">{{ ev.datetime }}</p>
          <p class="mt-2 text-sm leading-relaxed text-bark/70">{{ ev.venue }}, {{ ev.address }}</p>
          <button
            type="button"
            class="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-sage-deep underline underline-offset-4 transition hover:text-rosedust"
            @click="active = i"
          >
            View map
          </button>
        </div>
      </article>
    </div>

    <!-- Modal -->
    <Transition name="fade">
      <div
        v-if="active !== null"
        class="fixed inset-0 z-[70] flex items-center justify-center bg-bark/60 px-4 backdrop-blur-sm"
        @click.self="active = null"
      >
        <div class="relative w-full max-w-lg overflow-hidden rounded-2xl bg-cream shadow-2xl">
          <button
            type="button"
            class="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-bark/70 shadow transition hover:bg-cream"
            aria-label="Close"
            @click="active = null"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="h-5 w-5">
              <path stroke-linecap="round" d="M6 6l12 12M6 18 18 6" />
            </svg>
          </button>
          <div class="px-6 pt-7 text-center">
            <h3 class="font-display text-2xl uppercase tracking-[0.1em] text-rosedust">{{ events[active].title }}</h3>
            <p class="mt-2 text-sm text-bark/70">{{ events[active].datetime }}</p>
          </div>
          <div class="p-6">
            <MapEmbed
              :query="events[active].mapQuery"
              :venue-name="events[active].venue"
              :address="events[active].address"
            />
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
