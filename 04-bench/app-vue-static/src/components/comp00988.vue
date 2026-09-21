<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01191B, calcu00554B, calcu01375B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu01191B(seed) - calcu00554B(seed) + calcu01375B(seed));
</script>

<template>
  <div class="blk">comp00988: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(93 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(273 50% 50%);
  display: inline-block;
}
</style>
