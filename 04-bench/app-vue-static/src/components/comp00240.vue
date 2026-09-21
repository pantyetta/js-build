<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00571A, calcu00927B, calcu01293B, calcu01540B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00571A(seed) - calcu00927B(seed) + calcu01293B(seed) - calcu01540B(seed));
</script>

<template>
  <div class="blk">comp00240: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(24 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(204 50% 50%);
  display: inline-block;
}
</style>
