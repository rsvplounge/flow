<!-- Dekoratibong floral spray para sa mga kanto (blush/rosedust blooms + sage leaves). -->
<template>
  <svg viewBox="0 0 240 170" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Stems -->
    <path
      d="M8 165 Q 50 110 70 70 M70 70 Q 95 55 130 40 M70 70 Q 58 50 50 30"
      stroke="#8c9a7d"
      stroke-width="1.2"
      stroke-linecap="round"
    />
    <!-- Leaves (sage) -->
    <g fill="#8c9a7d" opacity="0.9">
      <ellipse cx="35" cy="128" rx="12" ry="4.5" transform="rotate(-35 35 128)" />
      <ellipse cx="55" cy="100" rx="11" ry="4" transform="rotate(-20 55 100)" />
      <ellipse cx="80" cy="58" rx="10" ry="4" transform="rotate(35 80 58)" />
      <ellipse cx="102" cy="46" rx="9" ry="3.6" transform="rotate(15 102 46)" />
      <ellipse cx="48" cy="42" rx="8" ry="3.4" transform="rotate(-55 48 42)" />
    </g>
    <!-- Flower 1 — big (blush) -->
    <g transform="translate(130 40)">
      <g fill="#e3b7af">
        <ellipse rx="6" ry="11" cy="-11" />
        <ellipse rx="6" ry="11" cy="-11" transform="rotate(60)" />
        <ellipse rx="6" ry="11" cy="-11" transform="rotate(120)" />
        <ellipse rx="6" ry="11" cy="-11" transform="rotate(180)" />
        <ellipse rx="6" ry="11" cy="-11" transform="rotate(240)" />
        <ellipse rx="6" ry="11" cy="-11" transform="rotate(300)" />
      </g>
      <circle r="6" fill="#d8b15a" />
    </g>
    <!-- Flower 2 — medium (rosedust) -->
    <g transform="translate(95 78)">
      <g fill="#c89089">
        <ellipse rx="5" ry="9" cy="-9" />
        <ellipse rx="5" ry="9" cy="-9" transform="rotate(72)" />
        <ellipse rx="5" ry="9" cy="-9" transform="rotate(144)" />
        <ellipse rx="5" ry="9" cy="-9" transform="rotate(216)" />
        <ellipse rx="5" ry="9" cy="-9" transform="rotate(288)" />
      </g>
      <circle r="5" fill="#d8b15a" />
    </g>
    <!-- Flower 3 — small (cream) -->
    <g transform="translate(45 118)">
      <g fill="#f0e2dc">
        <ellipse rx="4" ry="7" cy="-7" />
        <ellipse rx="4" ry="7" cy="-7" transform="rotate(72)" />
        <ellipse rx="4" ry="7" cy="-7" transform="rotate(144)" />
        <ellipse rx="4" ry="7" cy="-7" transform="rotate(216)" />
        <ellipse rx="4" ry="7" cy="-7" transform="rotate(288)" />
      </g>
      <circle r="4" fill="#cba35a" />
    </g>
    <!-- Buds -->
    <g fill="#c89089" opacity="0.85">
      <circle cx="116" cy="62" r="3.5" />
      <circle cx="62" cy="86" r="3" />
    </g>
  </svg>
</template>
