<!--
  Gumaganang RSVP form para sa demo (in-memory ang responses).
  Theme-able via `accentClass` (text color) at `buttonClass` (button bg+hover).
  Sa production, dito ikakabit ang totoong backend / RSVP tracking dashboard.
-->
<script setup>
import { ref, computed } from 'vue'

defineProps({
  accentClass: { type: String, default: 'text-indigo-600' },
  buttonClass: { type: String, default: 'bg-indigo-600 hover:bg-indigo-700' },
  heading: { type: String, default: 'Will you be joining us?' },
  subtext: { type: String, default: 'Kindly let us know if you can make it.' },
  deadlineText: { type: String, default: '' },
  reservedSeats: { type: Number, default: 0 },
})

const fullName = ref('')
const attending = ref('yes')
const guests = ref(1)
const message = ref('')
const submitted = ref(false)

// Mock na "live" na listahan ng sagot — para makita ang RSVP tracking.
const responses = ref([
  { name: 'Carlo Reyes', attending: 'yes', guests: 2 },
  { name: 'Liza Cruz', attending: 'yes', guests: 1 },
  { name: 'Andrea Santos', attending: 'no', guests: 0 },
])

const attendingCount = computed(() =>
  responses.value
    .filter((r) => r.attending === 'yes')
    .reduce((sum, r) => sum + Number(r.guests), 0)
)

function submit() {
  if (!fullName.value.trim()) return
  responses.value.push({
    name: fullName.value.trim(),
    attending: attending.value,
    guests: attending.value === 'yes' ? Number(guests.value) : 0,
  })
  submitted.value = true
}

function reset() {
  fullName.value = ''
  attending.value = 'yes'
  guests.value = 1
  message.value = ''
  submitted.value = false
}
</script>

<template>
  <section class="mx-auto max-w-xl px-6">
    <h2 class="text-center text-2xl font-bold sm:text-3xl" :class="accentClass">
      {{ heading }}
    </h2>
    <p class="mt-2 text-center text-slate-500">{{ subtext }}</p>
    <p v-if="deadlineText" class="mt-1 text-center text-sm text-slate-400">
      Please respond on or before <span class="font-medium text-slate-500">{{ deadlineText }}</span>.
    </p>
    <p
      v-if="reservedSeats"
      class="mx-auto mt-4 w-fit rounded-full border border-current/30 px-4 py-1.5 text-sm"
      :class="accentClass"
    >
      We have reserved <span class="font-semibold">{{ reservedSeats }}</span>
      seat{{ reservedSeats > 1 ? 's' : '' }} for you.
    </p>

    <!-- Confirmation state -->
    <div
      v-if="submitted"
      class="mt-8 rounded-2xl bg-white p-8 text-center shadow-sm"
    >
      <p class="text-lg font-semibold" :class="accentClass">
        Thank you, {{ responses[responses.length - 1].name }}!
      </p>
      <p class="mt-2 text-slate-600">
        {{
          responses[responses.length - 1].attending === 'yes'
            ? "We can't wait to celebrate with you — your RSVP has been recorded."
            : 'Thank you for letting us know — you will be missed!'
        }}
      </p>
      <button
        type="button"
        class="mt-6 text-sm font-medium underline underline-offset-4"
        :class="accentClass"
        @click="reset"
      >
        Submit another response
      </button>
    </div>

    <!-- Form -->
    <form v-else class="mt-8 space-y-5" @submit.prevent="submit">
      <div>
        <label class="mb-1.5 block text-sm font-medium text-slate-600">
          Full name
        </label>
        <input
          v-model="fullName"
          type="text"
          required
          placeholder="Juan Dela Cruz"
          class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-current focus:outline-none focus:ring-2 focus:ring-current/20"
          :class="accentClass"
        />
      </div>

      <div>
        <span class="mb-1.5 block text-sm font-medium text-slate-600">
          Will you attend?
        </span>
        <div class="flex gap-3">
          <label
            class="flex flex-1 cursor-pointer items-center justify-center rounded-xl border px-4 py-3 text-sm font-medium transition"
            :class="attending === 'yes'
              ? 'border-current ' + accentClass
              : 'border-slate-300 text-slate-500'"
          >
            <input v-model="attending" type="radio" value="yes" class="sr-only" />
            Joyfully accept
          </label>
          <label
            class="flex flex-1 cursor-pointer items-center justify-center rounded-xl border px-4 py-3 text-sm font-medium transition"
            :class="attending === 'no'
              ? 'border-current ' + accentClass
              : 'border-slate-300 text-slate-500'"
          >
            <input v-model="attending" type="radio" value="no" class="sr-only" />
            Regretfully decline
          </label>
        </div>
      </div>

      <div v-if="attending === 'yes'">
        <label class="mb-1.5 block text-sm font-medium text-slate-600">
          Number of guests (including you)
        </label>
        <input
          v-model="guests"
          type="number"
          min="1"
          max="10"
          class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-current focus:outline-none focus:ring-2 focus:ring-current/20"
          :class="accentClass"
        />
      </div>

      <div>
        <label class="mb-1.5 block text-sm font-medium text-slate-600">
          Message (optional)
        </label>
        <textarea
          v-model="message"
          rows="3"
          placeholder="Best wishes..."
          class="w-full rounded-xl border border-slate-300 px-4 py-3 focus:border-current focus:outline-none focus:ring-2 focus:ring-current/20"
          :class="accentClass"
        />
      </div>

      <button
        type="submit"
        class="w-full rounded-xl px-6 py-3.5 font-semibold text-white transition"
        :class="buttonClass"
      >
        Send RSVP
      </button>
    </form>

    <!-- Live tracker (showcase ng RSVP tracking feature) -->
    <div class="mt-8 rounded-2xl border border-slate-200 bg-white/60 p-5">
      <p class="text-center text-sm text-slate-500">
        <span class="text-2xl font-bold" :class="accentClass">{{ attendingCount }}</span>
        guests confirmed so far
      </p>
    </div>
  </section>
</template>
