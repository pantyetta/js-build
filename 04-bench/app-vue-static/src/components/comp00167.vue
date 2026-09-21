<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00536A, calcu01209A, calcu00061A, calcu00624A, calcu00163A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00536A(seed) - calcu01209A(seed) + calcu00061A(seed) - calcu00624A(seed) + calcu00163A(seed));
</script>

<template>
  <div class="blk">comp00167: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(131 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(311 50% 50%);
  display: inline-block;
}
</style>
