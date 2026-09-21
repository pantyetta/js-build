<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01107A, calcu00813A, calcu00726B, calcu00510B, calcu01091B } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01107A(seed) - calcu00813A(seed) + calcu00726B(seed) - calcu00510B(seed) + calcu01091B(seed));
</script>

<template>
  <div class="blk">comp01049: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(70 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(250 50% 50%);
  display: inline-block;
}
</style>
