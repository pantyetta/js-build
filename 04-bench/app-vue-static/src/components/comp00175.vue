<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00331B, calcu00991A, calcu00394A, calcu01101B, calcu00009B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00331B(seed) - calcu00991A(seed) + calcu00394A(seed) - calcu01101B(seed) + calcu00009B(seed));
</script>

<template>
  <div class="blk">comp00175: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(159 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(339 50% 50%);
  display: inline-block;
}
</style>
