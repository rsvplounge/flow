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

    <ol class="mx-auto mt-10 w-fit space-y-6 text-left">
      <li
        v-for="(item, i) in items"
        :key="i"
        class="flex items-start gap-5"
      >
        <div class="flex flex-col items-center">
          <span
            class="h-3 w-3 flex-none rounded-full ring-4 ring-current/10"
            :class="accentClass"
          />
          <span
            v-if="i < items.length - 1"
            class="mt-1 h-12 w-px bg-sage/25"
            aria-hidden="true"
          />
        </div>
        <div class="-mt-1">
          <p class="text-sm font-semibold uppercase tracking-wide" :class="accentClass">{{ item.time }}</p>
          <p class="font-display text-xl text-bark">{{ item.title }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>
