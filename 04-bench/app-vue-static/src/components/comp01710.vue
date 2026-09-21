<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00401A, calcu01153B, calcu00858A, calcu00138A, calcu01057B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00401A(seed) - calcu01153B(seed) + calcu00858A(seed) - calcu00138A(seed) + calcu01057B(seed));
</script>

<template>
  <div class="blk">comp01710: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(261 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(81 50% 50%);
  display: inline-block;
}
</style>
