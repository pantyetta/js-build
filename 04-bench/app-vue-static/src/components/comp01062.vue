<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01143A, calcu01257B, calcu01488B, calcu01527A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01143A(seed) - calcu01257B(seed) + calcu01488B(seed) - calcu01527A(seed));
</script>

<template>
  <div class="blk">comp01062: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(137 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(317 50% 50%);
  display: inline-block;
}
</style>
