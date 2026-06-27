<!--
  Flat, faceless na couple illustration para sa Dress Code.
  Lahat ng kulay ay theme-able via props — i-tugma sa palette ng okasyon.
-->
<script setup>
defineProps({
  shirt: { type: String, default: '#e8dcc0' }, // top ng lalaki
  pants: { type: String, default: '#3a3a3a' }, // slacks ng lalaki
  dress: { type: String, default: '#8c9a7d' }, // damit ng babae
  skin: { type: String, default: '#e6c4a0' },
  hair: { type: String, default: '#2f2622' },
  shoe: { type: String, default: '#4a3326' },
})
</script>

<template>
  <svg
    viewBox="0 0 360 420"
    class="mx-auto h-auto w-full max-w-[250px]"
    role="img"
    aria-label="Illustration of a couple in the event dress code"
  >
    <!-- ground shadow -->
    <ellipse cx="110" cy="392" rx="58" ry="9" :fill="hair" opacity="0.08" />
    <ellipse cx="252" cy="392" rx="62" ry="9" :fill="hair" opacity="0.08" />

    <!-- ───────── GENTLEMAN (left) ───────── -->
    <!-- shoes -->
    <ellipse cx="94" cy="384" rx="16" ry="7" :fill="shoe" />
    <ellipse cx="128" cy="384" rx="16" ry="7" :fill="shoe" />
    <!-- pants -->
    <path
      d="M80 208 Q110 218 140 208 L137 380 L117 380 L110 250 L103 380 L83 380 Z"
      :fill="pants"
    />
    <!-- hands -->
    <circle cx="71" cy="206" r="7" :fill="skin" />
    <circle cx="149" cy="206" r="7" :fill="skin" />
    <!-- sleeves -->
    <path d="M84 104 L64 200 L78 206 L94 116 Z" :fill="shirt" />
    <path d="M136 104 L156 200 L142 206 L126 116 Z" :fill="shirt" />
    <!-- shirt body -->
    <path d="M84 100 Q110 90 136 100 L142 214 Q110 224 78 214 Z" :fill="shirt" />
    <!-- collar + placket (subtle darker tone) -->
    <path d="M102 96 L110 124 L118 96 L112 92 L110 100 L108 92 Z" :fill="hair" opacity="0.10" />
    <line x1="110" y1="120" x2="110" y2="208" :stroke="hair" stroke-opacity="0.10" stroke-width="2" />
    <!-- neck -->
    <rect x="102" y="80" width="16" height="16" rx="4" :fill="skin" />
    <!-- face (faceless) -->
    <ellipse cx="110" cy="62" rx="22" ry="26" :fill="skin" />
    <!-- hair -->
    <path d="M86 58 Q88 30 110 30 Q132 30 134 58 Q128 46 110 46 Q92 46 86 58 Z" :fill="hair" />

    <!-- ───────── LADY (right) ───────── -->
    <!-- heels -->
    <path d="M236 382 l11 0 1 7 -15 0 z" :fill="shoe" />
    <path d="M261 382 l11 0 -1 7 -15 0 z" :fill="shoe" />
    <!-- legs -->
    <rect x="240" y="336" width="9" height="48" rx="4" :fill="skin" />
    <rect x="258" y="336" width="9" height="48" rx="4" :fill="skin" />
    <!-- skirt (a-line, soft drape) -->
    <path d="M228 150 Q252 158 276 150 L306 340 Q252 358 198 340 Z" :fill="dress" />
    <!-- soft drape lines -->
    <g :stroke="hair" stroke-opacity="0.07" stroke-width="2" stroke-linecap="round">
      <path d="M236 168 Q224 250 218 332" fill="none" />
      <path d="M252 170 L252 340" fill="none" />
      <path d="M268 168 Q280 250 286 332" fill="none" />
    </g>
    <!-- waist line -->
    <rect x="228" y="146" width="48" height="7" rx="3" :fill="hair" opacity="0.10" />
    <!-- bodice (sweetheart neckline) -->
    <path d="M230 104 Q240 100 244 110 Q252 120 260 110 Q264 100 274 104 L278 150 Q252 158 226 150 Z" :fill="dress" />
    <!-- shoulder straps -->
    <path d="M238 92 L233 108" :stroke="dress" stroke-width="5" stroke-linecap="round" />
    <path d="M266 92 L271 108" :stroke="dress" stroke-width="5" stroke-linecap="round" />
    <!-- arms resting at sides -->
    <path d="M230 116 Q220 150 224 178" :stroke="skin" stroke-width="9" stroke-linecap="round" fill="none" />
    <path d="M274 116 Q284 150 280 178" :stroke="skin" stroke-width="9" stroke-linecap="round" fill="none" />
    <!-- neck -->
    <rect x="245" y="80" width="14" height="14" rx="5" :fill="skin" />
    <!-- face (faceless) -->
    <ellipse cx="252" cy="62" rx="20" ry="24" :fill="skin" />
    <!-- hair — neat soft bob, symmetric -->
    <path
      d="M229 66 Q229 30 252 30 Q275 30 275 66 Q275 84 270 96 Q266 80 262 74 Q258 68 252 68 Q246 68 242 74 Q238 80 234 96 Q229 84 229 66 Z"
      :fill="hair"
    />
  </svg>
</template>
