<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00658B, calcu01136B, calcu00880A, calcu01066B, calcu01162B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00658B(seed) - calcu01136B(seed) + calcu00880A(seed) - calcu01066B(seed) + calcu01162B(seed));
</script>

<template>
  <div class="blk">comp00357: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(210 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(30 50% 50%);
  display: inline-block;
}
</style>
