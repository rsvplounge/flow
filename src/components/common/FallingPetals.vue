<!-- Banayad na dumadaloy na petals — pang-ambiance (romantic motion). -->
<script setup>
// Deterministic na posisyon/timing para walang random na jitter sa re-render.
const petals = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  style: {
    left: `${(i * 7.3) % 100}%`,
    width: `${7 + (i % 3) * 4}px`,
    height: `${7 + (i % 3) * 4}px`,
    animationDelay: `${(i % 7) * 1.4}s`,
    animationDuration: `${9 + (i % 5) * 2.5}s`,
    opacity: 0.35 + (i % 3) * 0.12,
  },
}))
</script>

<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <span v-for="p in petals" :key="p.id" class="petal" :style="p.style" />
  </div>
</template>

<style scoped>
.petal {
  position: absolute;
  top: -24px;
  border-radius: 60% 40% 60% 40%;
  background: rgba(191, 133, 127, 0.55); /* rosedust */
  animation-name: petal-fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes petal-fall {
  0% {
    transform: translateY(-10%) translateX(0) rotate(0deg);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  100% {
    transform: translateY(105vh) translateX(50px) rotate(320deg);
    opacity: 0.15;
  }
}
@media (prefers-reduced-motion: reduce) {
  .petal {
    display: none;
  }
}
</style>
