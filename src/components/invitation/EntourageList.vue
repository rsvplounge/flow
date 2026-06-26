<!-- Wedding entourage — grouped layout (parents, sponsors, honor attendants). -->
<script setup>
import LeafDivider from '@/components/common/LeafDivider.vue'

defineProps({
  data: { type: Object, required: true },
})
</script>

<template>
  <section class="mx-auto max-w-2xl px-6 text-center">
    <p class="text-xs font-medium uppercase tracking-[0.3em] text-rosedust">
      with us at the altar
    </p>
    <h2 class="mt-2 font-display text-4xl font-light text-sage-deep">The Entourage</h2>
    <LeafDivider class="mx-auto mt-4 h-6 w-40 text-sage" />

    <!-- Our Beloved Parents -->
    <p class="mt-12 text-xs font-medium uppercase tracking-[0.25em] text-sage-deep">
      Our Beloved Parents
    </p>
    <div class="mx-auto mt-4 grid max-w-md grid-cols-2 gap-x-6">
      <div class="space-y-1">
        <p v-for="(n, i) in data.parents.groom" :key="`g${i}`" class="font-display text-lg text-bark">
          {{ n }}
        </p>
      </div>
      <div class="space-y-1">
        <p v-for="(n, i) in data.parents.bride" :key="`b${i}`" class="font-display text-lg text-bark">
          {{ n }}
        </p>
      </div>
    </div>

    <!-- Officiating Priest -->
    <p class="mt-10 text-xs font-medium uppercase tracking-[0.25em] text-sage-deep">
      Officiating Priest
    </p>
    <p class="mt-3 font-display text-lg text-bark">{{ data.officiant }}</p>

    <!-- Principal Sponsors -->
    <p class="mt-10 text-xs font-medium uppercase tracking-[0.25em] text-sage-deep">
      Principal Sponsors
    </p>
    <div class="mx-auto mt-4 max-w-lg space-y-1.5">
      <div
        v-for="(s, i) in data.sponsors"
        :key="`s${i}`"
        class="grid grid-cols-2 gap-x-6 font-display text-base text-bark sm:gap-x-10 sm:text-lg"
      >
        <span class="text-right">{{ s.sir }}</span>
        <span class="text-left">{{ s.madam }}</span>
      </div>
    </div>

    <!-- Decorative divider -->
    <div class="mx-auto my-10 flex w-fit items-center gap-3 text-rosedust/70" aria-hidden="true">
      <span class="h-px w-16 bg-rosedust/40" /><span class="text-sm">✦</span><span class="h-px w-16 bg-rosedust/40" />
    </div>

    <!-- Honor Attendants -->
    <p class="text-xs font-medium uppercase tracking-[0.25em] text-sage-deep">
      Honor Attendants
    </p>
    <div class="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div>
        <p class="text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">Matron of Honor</p>
        <p class="mt-1 font-display text-lg text-bark">{{ data.honor.matronOfHonor }}</p>
      </div>
      <div>
        <p class="text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">Maid of Honor</p>
        <p class="mt-1 font-display text-lg text-bark">{{ data.honor.maidOfHonor }}</p>
      </div>
      <div>
        <p class="text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">Best Man</p>
        <p class="mt-1 font-display text-lg text-bark">{{ data.honor.bestMan }}</p>
      </div>
    </div>

    <!-- Bridesmaids / Groomsmen -->
    <div class="mx-auto mt-10 grid max-w-md grid-cols-2 gap-x-8">
      <div>
        <p class="text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">Bridesmaids</p>
        <p v-for="(n, i) in data.bridesmaids" :key="`bm${i}`" class="mt-1 font-display text-lg text-bark">
          {{ n }}
        </p>
      </div>
      <div>
        <p class="text-[0.7rem] uppercase tracking-[0.2em] text-rosedust">Groomsmen</p>
        <p v-for="(n, i) in data.groomsmen" :key="`gm${i}`" class="mt-1 font-display text-lg text-bark">
          {{ n }}
        </p>
      </div>
    </div>
  </section>
</template>
