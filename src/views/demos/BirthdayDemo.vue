<!-- DEMO 3: Birthday — warm, playful, pero refined. -->
<script setup>
import { birthdayDemo as d } from '@/data/demoInvitations'
import CountdownTimer from '@/components/invitation/CountdownTimer.vue'
import EventDetails from '@/components/invitation/EventDetails.vue'
import MapEmbed from '@/components/invitation/MapEmbed.vue'
import PhotoGallery from '@/components/invitation/PhotoGallery.vue'
import RsvpForm from '@/components/invitation/RsvpForm.vue'
import DemoCta from '@/components/common/DemoCta.vue'
import MusicPlayer from '@/components/common/MusicPlayer.vue'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main class="bg-cream text-bark">
    <!-- Hero (with background image) -->
    <section class="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-28 text-center">
      <!-- Background photo (placeholder — palitan ng totoong photo) -->
      <img
        src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1600&q=75&auto=format&fit=crop"
        alt=""
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-amber-900/55 via-amber-800/45 to-amber-900/70" aria-hidden="true" />

      <div class="relative text-cream">
        <p v-reveal class="font-script text-3xl sm:text-4xl">you're invited</p>
        <h1 v-reveal="100" class="mt-3 font-display text-4xl font-light tracking-tight drop-shadow sm:text-7xl">
          {{ d.celebrant }}
        </h1>
        <div v-reveal="200" class="mx-auto my-8 flex w-fit items-center gap-3 text-cream/80" aria-hidden="true">
          <span class="h-px w-10 bg-cream/50" /><span class="text-xs">✿</span><span class="h-px w-10 bg-cream/50" />
        </div>
        <p v-reveal="250" class="mx-auto max-w-md text-cream/90">{{ d.tagline }}</p>
        <p v-reveal="300" class="mt-4 font-display text-2xl text-cream">{{ d.dateLabel }}</p>
      </div>

      <button
        type="button"
        @click="scrollTo('party')"
        class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream/80 transition hover:text-cream"
        aria-label="Scroll down"
      >
        <span class="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <svg class="h-5 w-5 animate-bob" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </section>

    <!-- Countdown (framed panel) -->
    <section id="party" class="bg-amber-50/60 px-6 py-20 sm:py-24">
      <div
        v-reveal
        class="mx-auto max-w-xl rounded-[2rem] border border-amber-200 bg-cream/80 px-6 py-12 text-center shadow-lg shadow-amber-500/5 backdrop-blur sm:px-10"
      >
        <p class="text-xs uppercase tracking-[0.3em] text-amber-600">Party starts in</p>
        <div class="mx-auto my-6 flex w-fit items-center gap-3 text-amber-500/70" aria-hidden="true">
          <span class="h-px w-10 bg-amber-400/50" /><span class="text-sm">✿</span><span class="h-px w-10 bg-amber-400/50" />
        </div>
        <CountdownTimer :target-date="d.date" accent-class="text-amber-600" />
      </div>
    </section>

    <!-- About the Birthday Star (faded photo into text) -->
    <section class="relative">
      <div class="relative h-[55vh] w-full overflow-hidden sm:h-[62vh]">
        <img :src="d.about.image" alt="" class="h-full w-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cream/40 to-cream" aria-hidden="true" />
      </div>

      <div class="relative z-10 -mt-32 px-6 pb-16 sm:-mt-40">
        <p v-reveal class="text-center font-script text-3xl text-amber-600">turning five</p>
        <h2 v-reveal class="mt-1 text-center font-display text-4xl font-light text-amber-700 sm:text-5xl">
          About the Birthday Star
        </h2>
        <p v-reveal class="mx-auto mt-6 max-w-xl text-center leading-loose text-bark/75 sm:text-lg">
          {{ d.about.text }}
        </p>
      </div>
    </section>

    <!-- Program -->
    <div v-reveal class="py-16">
      <EventDetails title="Party Schedule" :items="d.program" accent-class="text-amber-600" />
    </div>

    <!-- Venue -->
    <section class="px-6 py-16">
      <h2 v-reveal class="mb-10 text-center font-display text-4xl font-light text-amber-700">Where's the Party?</h2>
      <div v-reveal="100" class="mx-auto max-w-2xl">
        <MapEmbed :query="d.venue.mapQuery" :venue-name="d.venue.name" :address="d.venue.address" />
      </div>
    </section>

    <!-- Gallery -->
    <div class="py-16"><PhotoGallery :images="d.gallery" title="The Fun" /></div>

    <!-- RSVP -->
    <section class="bg-amber-50/60 py-20">
      <div v-reveal>
        <RsvpForm accent-class="text-amber-700" button-class="bg-amber-500 hover:bg-amber-600" />
      </div>
    </section>

    <!-- Conversion CTA -->
    <DemoCta occasion="birthday" />

    <div class="bg-cream py-12 text-center">
      <router-link to="/" class="text-sm text-amber-600 underline-offset-4 hover:underline">
        ← Back to home
      </router-link>
    </div>

    <MusicPlayer src="birthday.mp3" />
  </main>
</template>
