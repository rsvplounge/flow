<!-- DEMO 1: Wedding — Romantic Botanical, elegante at malambing. -->
<script setup>
import { weddingDemo as d } from '@/data/demoInvitations'
import CountdownTimer from '@/components/invitation/CountdownTimer.vue'
import EventDetails from '@/components/invitation/EventDetails.vue'
import MapEmbed from '@/components/invitation/MapEmbed.vue'
import EntourageList from '@/components/invitation/EntourageList.vue'
import DressCode from '@/components/invitation/DressCode.vue'
import PhotoGallery from '@/components/invitation/PhotoGallery.vue'
import RsvpForm from '@/components/invitation/RsvpForm.vue'
import LeafDivider from '@/components/common/LeafDivider.vue'
import FloralCorner from '@/components/common/FloralCorner.vue'
import FloralCrest from '@/components/common/FloralCrest.vue'
import DemoCta from '@/components/common/DemoCta.vue'
import MusicPlayer from '@/components/common/MusicPlayer.vue'

// Hiwalayin ang pangalan para ma-accent ang "&"; buuin ang date parts para sa hero.
const coupleParts = d.couple.split(' & ')
const dt = new Date(d.date)
const heroDate = {
  weekday: dt.toLocaleDateString('en-US', { weekday: 'long' }),
  month: dt.toLocaleDateString('en-US', { month: 'long' }),
  day: dt.getDate(),
  year: dt.getFullYear(),
  time: dt.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
}

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <main class="bg-cream text-bark">
    <!-- Hero — soft sage, photo-less, elegante -->
    <section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#dde3d4] via-[#eef0e6] to-cream px-6 py-24 text-center">
      <!-- Floral corners (buhay at may kulay) — mas maliit/banayad sa mobile para hindi makasagabal -->
      <FloralCorner class="pointer-events-none absolute -bottom-2 -left-3 h-28 w-auto opacity-70 sm:bottom-0 sm:left-0 sm:h-64 sm:opacity-90" />
      <FloralCorner class="pointer-events-none absolute -right-3 -top-2 h-28 w-auto -scale-100 opacity-70 sm:right-0 sm:top-0 sm:h-64 sm:opacity-90" />

      <!-- Arched gold frame (Canva-style) -->
      <div v-reveal class="relative mx-auto w-full max-w-md rounded-t-[13rem] border border-[#c2a36b]/45 bg-cream/35 px-7 pb-14 pt-14 text-center shadow-sm backdrop-blur-[2px] sm:px-10">
        <!-- Floral crest -->
        <FloralCrest class="mx-auto h-12 w-auto" />

        <p class="mt-5 text-xs font-medium uppercase tracking-[0.35em] text-sage">
          We're getting married
        </p>

        <h1 class="mt-4 font-script text-6xl leading-[0.95] text-sage-deep sm:text-7xl">
          {{ coupleParts[0] }}<span class="text-[#c2a36b]"> &amp; </span>{{ coupleParts[1] }}
        </h1>

        <div class="mx-auto my-6 flex w-fit items-center gap-2.5 text-[#c2a36b]" aria-hidden="true">
          <span class="h-px w-16 bg-[#c2a36b]/50" /><span class="text-xs">✦</span><span class="h-px w-16 bg-[#c2a36b]/50" />
        </div>

        <p class="mx-auto max-w-xs font-display text-lg italic leading-relaxed text-bark/70 sm:text-xl">
          {{ d.tagline }}
        </p>

        <!-- Date block (weekday | month/DD/year | time) -->
        <div class="mx-auto mt-8 grid max-w-xs grid-cols-3 items-center text-center text-sage-deep">
          <span class="whitespace-nowrap text-xs uppercase tracking-[0.15em] sm:text-sm">{{ heroDate.weekday }}</span>
          <div class="border-x border-sage/30 px-1 py-1">
            <p class="text-[0.65rem] uppercase tracking-[0.2em] text-sage">{{ heroDate.month }}</p>
            <p class="font-display text-4xl font-light leading-tight text-[#c2a36b] sm:text-5xl">{{ heroDate.day }}</p>
            <p class="text-[0.65rem] tracking-[0.2em] text-sage">{{ heroDate.year }}</p>
          </div>
          <span class="whitespace-nowrap text-xs uppercase tracking-[0.15em] sm:text-sm">{{ heroDate.time }}</span>
        </div>

        <p class="mt-7 font-display text-lg uppercase tracking-[0.15em] text-sage-deep sm:text-xl">
          {{ d.venue.name }}
        </p>
      </div>

      <!-- Scroll cue -->
      <button
        type="button"
        @click="scrollTo('countdown')"
        class="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-sage/70 transition hover:text-sage"
        aria-label="Scroll down"
      >
        <span class="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <svg class="h-5 w-5 animate-bob" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </section>

    <!-- Countdown -->
    <section id="countdown" class="px-6 py-20 text-center">
      <p v-reveal class="text-xs uppercase tracking-[0.3em] text-sage">Counting down to forever</p>
      <div v-reveal class="mx-auto my-6 flex w-fit items-center gap-3 text-[#c2a36b]" aria-hidden="true">
        <span class="h-px w-10 bg-[#c2a36b]/45" /><span class="text-sm">✦</span><span class="h-px w-10 bg-[#c2a36b]/45" />
      </div>
      <div v-reveal="100"><CountdownTimer :target-date="d.date" accent-class="text-sage-deep" /></div>
    </section>

    <!-- Our Story (faded photo into text) -->
    <section class="relative">
      <div class="relative h-[55vh] w-full overflow-hidden sm:h-[62vh]">
        <img :src="d.story.image" alt="" class="h-full w-full object-cover object-center" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cream/40 to-cream" aria-hidden="true" />
      </div>

      <div class="relative z-10 -mt-32 px-6 pb-16 sm:-mt-40">
        <p v-reveal class="text-center font-script text-3xl text-rosedust">our story</p>
        <h2 v-reveal class="mt-1 text-center font-display text-4xl font-light text-sage-deep sm:text-5xl">
          How it all began
        </h2>
        <p v-reveal class="mx-auto mt-6 max-w-xl text-center leading-loose text-bark/75 sm:text-lg">
          {{ d.story.text }}
        </p>
      </div>
    </section>

    <!-- Entourage -->
    <div v-reveal class="py-16"><EntourageList :data="d.entourage" /></div>

    <!-- Program -->
    <div v-reveal class="py-16">
      <EventDetails title="Order of Events" :items="d.program" accent-class="text-rosedust" />
    </div>

    <!-- Ceremony -->
    <section class="px-6 py-16">
      <h2 v-reveal class="mb-10 text-center font-display text-4xl font-light text-sage-deep">The Ceremony</h2>
      <div v-reveal="100" class="mx-auto max-w-2xl">
        <MapEmbed :query="d.venue.mapQuery" :venue-name="d.venue.name" :address="d.venue.address" />
      </div>
    </section>

    <!-- Reception -->
    <section class="bg-blush/30 px-6 py-16">
      <h2 v-reveal class="mb-10 text-center font-display text-4xl font-light text-sage-deep">The Reception</h2>
      <div v-reveal="100" class="mx-auto max-w-2xl">
        <MapEmbed :query="d.reception.mapQuery" :venue-name="d.reception.name" :address="d.reception.address" />
      </div>
    </section>

    <!-- Attire -->
    <section class="py-16">
      <div v-reveal>
        <DressCode :theme="d.dressCode.theme" :palette="d.dressCode.palette" :note="d.dressCode.note" />
      </div>
    </section>

    <!-- Gifts -->
    <section class="bg-blush/30 px-6 py-20">
      <div v-reveal class="mx-auto max-w-xl text-center">
        <p class="font-script text-3xl text-rosedust">with love</p>
        <h2 class="mt-1 font-display text-4xl font-light text-sage-deep sm:text-5xl">A Note on Gifts</h2>
        <LeafDivider class="mx-auto mt-4 h-6 w-44 text-sage" />
        <p class="mx-auto mt-6 max-w-md leading-loose text-bark/75">{{ d.gifts }}</p>
      </div>
    </section>

    <!-- Gallery -->
    <div class="py-16"><PhotoGallery :images="d.gallery" title="Our Moments" /></div>

    <!-- Hashtag -->
    <section class="bg-sage-deep px-6 py-16 text-center text-cream">
      <p v-reveal class="font-script text-3xl text-cream/85">share the love</p>
      <p v-reveal class="mt-2 font-display text-3xl tracking-wide sm:text-4xl">{{ d.hashtag }}</p>
      <p v-reveal class="mt-3 text-sm text-cream/70">Tag your photos so we can relive every moment with you.</p>
    </section>

    <!-- RSVP -->
    <section class="bg-blush/50 py-20">
      <div v-reveal>
        <RsvpForm accent-class="text-sage-deep" button-class="bg-sage hover:bg-sage-deep" />
      </div>
    </section>

    <!-- Conversion CTA -->
    <DemoCta occasion="wedding" />

    <div class="bg-cream py-12 text-center">
      <router-link to="/" class="text-sm text-sage underline-offset-4 hover:underline">
        ← Back to home
      </router-link>
    </div>

    <MusicPlayer src="wedding.mp3" />
  </main>
</template>
