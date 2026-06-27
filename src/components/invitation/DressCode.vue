<!-- Dress code guide na may couple illustration + color swatches. -->
<script setup>
import CoupleAttire from '@/components/invitation/CoupleAttire.vue'

defineProps({
  theme: { type: String, required: true },
  palette: { type: Array, required: true },
  note: { type: String, default: '' },
  // Optional na attire colors para sa illustration (i-tugma sa theme).
  attire: { type: Object, default: null },
})
</script>

<template>
  <section class="mx-auto max-w-2xl px-6 text-center">
    <h2 class="font-display text-3xl font-light text-sage-deep sm:text-4xl">Dress Code</h2>
    <p class="mt-2 font-script text-2xl text-rosedust">{{ theme }}</p>

    <!-- Couple illustration (theme-tinted) -->
    <CoupleAttire
      v-if="attire"
      class="mt-8"
      :shirt="attire.shirt"
      :pants="attire.pants"
      :dress="attire.dress"
    />

    <div class="mt-8 flex flex-wrap items-center justify-center gap-6">
      <div v-for="swatch in palette" :key="swatch.label" class="flex flex-col items-center">
        <span
          class="h-16 w-16 rounded-full shadow-md ring-2 ring-white"
          :style="{ backgroundColor: swatch.color }"
        />
        <span class="mt-2 text-sm font-medium text-bark/70">{{ swatch.label }}</span>
      </div>
    </div>

    <p v-if="note" class="mt-8 text-sm italic text-bark/55">{{ note }}</p>
  </section>
</template>
