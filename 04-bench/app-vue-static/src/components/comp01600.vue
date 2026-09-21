<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00574B, calcu01219B, calcu00368A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00574B(seed) - calcu01219B(seed) + calcu00368A(seed));
</script>

<template>
  <div class="blk">comp01600: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(273 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(93 50% 50%);
  display: inline-block;
}
</style>
