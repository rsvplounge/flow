<!-- Icon timeline — oras | bilog na icon + linya | title + description. -->
<script setup>
defineProps({
  title: { type: String, default: 'Timeline' },
  // Array ng { time, title, desc, icon }
  items: { type: Array, required: true },
  // Tailwind border color para sa icon ring, hal. "border-sage/60"
  ringClass: { type: String, default: 'border-sage/60' },
})
</script>

<template>
  <section class="mx-auto max-w-xl px-6">
    <h2 class="mb-12 text-center font-display text-4xl font-light text-sage-deep sm:text-5xl">
      {{ title }}
    </h2>

    <div>
      <div
        v-for="(item, i) in items"
        :key="i"
        v-reveal="i * 90"
        class="flex gap-4 sm:gap-5"
      >
        <!-- Oras -->
        <div class="w-14 shrink-0 pt-3 text-right text-xs text-bark/55 sm:w-20 sm:text-sm">
          {{ item.time }}
        </div>

        <!-- Icon + connecting line -->
        <div class="flex flex-col items-center">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 bg-cream text-xl shadow-sm"
            :class="ringClass"
          >
            {{ item.icon }}
          </div>
          <span
            v-if="i < items.length - 1"
            class="mt-1 w-px flex-1 bg-sage/25"
            aria-hidden="true"
          />
        </div>

        <!-- Content -->
        <div class="pb-10 pt-2.5">
          <h3 class="font-display text-xl text-bark sm:text-2xl">{{ item.title }}</h3>
          <p v-if="item.desc" class="mt-0.5 text-sm leading-relaxed text-bark/60">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
