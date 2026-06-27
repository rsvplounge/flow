<!-- Wedding entourage — decorated, grouped layout (parents, sponsors, honor). -->
<script setup>
import LeafDivider from '@/components/common/LeafDivider.vue'
import FloralCrest from '@/components/common/FloralCrest.vue'
import BotanicalSprig from '@/components/common/BotanicalSprig.vue'

defineProps({
  data: { type: Object, required: true },
})
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-blush/25 via-cream to-blush/20 py-20">
    <!-- Corner botanical accents -->
    <BotanicalSprig class="pointer-events-none absolute -left-4 top-10 h-40 w-16 rotate-12 text-sage/25" />
    <BotanicalSprig class="pointer-events-none absolute -right-4 top-10 h-40 w-16 -rotate-12 -scale-x-100 text-sage/25" />

    <div class="relative mx-auto max-w-2xl px-6 text-center">
      <!-- Header -->
      <div v-reveal>
        <p class="text-xs font-medium uppercase tracking-[0.3em] text-rosedust">
          with us at the altar
        </p>
        <h2 class="mt-2 font-display text-4xl font-light text-sage-deep sm:text-5xl">The Entourage</h2>
        <FloralCrest class="mx-auto mt-3 h-12 w-24" />
      </div>

      <!-- Our Beloved Parents -->
      <div v-reveal class="mt-12">
        <div class="flex items-center justify-center gap-3">
          <span class="h-px w-8 bg-sage/40" />
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">
            Our Beloved Parents
          </p>
          <span class="h-px w-8 bg-sage/40" />
        </div>
        <div class="relative mx-auto mt-6 grid max-w-md grid-cols-2 gap-x-6">
          <div class="space-y-1">
            <p class="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">Groom's Parents</p>
            <p v-for="(n, i) in data.parents.groom" :key="`g${i}`" class="font-display text-sm text-bark sm:text-base">
              {{ n }}
            </p>
          </div>
          <!-- center heart divider -->
          <span class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-rosedust/70" aria-hidden="true">❦</span>
          <div class="space-y-1">
            <p class="mb-1 text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">Bride's Parents</p>
            <p v-for="(n, i) in data.parents.bride" :key="`b${i}`" class="font-display text-sm text-bark sm:text-base">
              {{ n }}
            </p>
          </div>
        </div>
      </div>

      <!-- Officiating Priest -->
      <div v-reveal class="mt-8">
        <svg class="mx-auto h-6 w-6 text-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
          <path d="M12 3v18M7 8h10" stroke-linecap="round" />
        </svg>
        <p class="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">
          Officiating Priest
        </p>
        <p class="mt-2 font-display text-lg text-bark">{{ data.officiant }}</p>
      </div>

      <!-- ✦ divider -->
      <div class="mx-auto my-9 flex w-fit items-center gap-3 text-rosedust/70" aria-hidden="true">
        <span class="h-px w-16 bg-rosedust/40" /><span class="text-sm">✦</span><span class="h-px w-16 bg-rosedust/40" />
      </div>

      <!-- Principal Sponsors -->
      <div v-reveal>
        <div class="flex items-center justify-center gap-3">
          <span class="h-px w-8 bg-sage/40" />
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">
            Principal Sponsors
          </p>
          <span class="h-px w-8 bg-sage/40" />
        </div>
        <div class="mx-auto mt-6 max-w-lg space-y-1.5">
          <div
            v-for="(s, i) in data.sponsors"
            :key="`s${i}`"
            class="grid grid-cols-2 gap-x-6 font-display text-sm text-bark sm:gap-x-10 sm:text-base"
          >
            <span class="text-right">{{ s.sir }}</span>
            <span class="text-left">{{ s.madam }}</span>
          </div>
        </div>
      </div>

      <!-- ✦ divider -->
      <div class="mx-auto my-9 flex w-fit items-center gap-3 text-rosedust/70" aria-hidden="true">
        <span class="h-px w-16 bg-rosedust/40" /><span class="text-sm">✦</span><span class="h-px w-16 bg-rosedust/40" />
      </div>

      <!-- Honor Attendants -->
      <div v-reveal>
        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-sage-deep">
          Honor Attendants
        </p>
        <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div
            v-for="role in [
              { label: 'Matron of Honor', name: data.honor.matronOfHonor },
              { label: 'Maid of Honor', name: data.honor.maidOfHonor },
              { label: 'Best Man', name: data.honor.bestMan },
            ]"
            :key="role.label"
          >
            <LeafDivider class="mx-auto mb-2 h-4 w-16 text-sage/60" />
            <p class="text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">{{ role.label }}</p>
            <p class="mt-1 font-display text-base text-bark">{{ role.name }}</p>
          </div>
        </div>
      </div>

      <!-- Bridesmaids / Groomsmen -->
      <div v-reveal class="mx-auto mt-8 grid max-w-md grid-cols-2 gap-6">
        <div>
          <p class="text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">Bridesmaids</p>
          <p v-for="(n, i) in data.bridesmaids" :key="`bm${i}`" class="mt-1.5 font-display text-lg text-bark">
            {{ n }}
          </p>
        </div>
        <div>
          <p class="text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">Groomsmen</p>
          <p v-for="(n, i) in data.groomsmen" :key="`gm${i}`" class="mt-1.5 font-display text-lg text-bark">
            {{ n }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
