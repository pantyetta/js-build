<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00249B, calcu00211B, calcu01391A, calcu00235B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00249B(seed) - calcu00211B(seed) + calcu01391A(seed) - calcu00235B(seed));
</script>

<template>
  <div class="blk">comp00637: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(144 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(324 50% 50%);
  display: inline-block;
}
</style>
