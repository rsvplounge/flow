<!-- Reusable program / timeline. Bagay sa lahat ng tema. -->
<script setup>
defineProps({
  title: { type: String, default: 'Program' },
  // Array ng { time, title }
  items: { type: Array, required: true },
  // Tailwind text color para sa time markers
  accentClass: { type: String, default: 'text-indigo-600' },
})
</script>

<template>
  <section class="mx-auto max-w-2xl px-6 text-center">
    <h2 class="font-display text-4xl font-light text-sage-deep sm:text-5xl">
      {{ title }}
    </h2>

    <div class="mx-auto mt-10 max-w-md divide-y divide-sage/15">
      <div v-for="(item, i) in items" :key="i" class="py-5">
        <p class="text-sm font-semibold uppercase tracking-[0.2em]" :class="accentClass">
          {{ item.time }}
        </p>
        <p class="mt-1 font-display text-xl text-bark sm:text-2xl">{{ item.title }}</p>
      </div>
    </div>
  </section>
</template>
