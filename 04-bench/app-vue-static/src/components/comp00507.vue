<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01558B, calcu00828A, calcu00303B, calcu00602A, calcu00002A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu01558B(seed) - calcu00828A(seed) + calcu00303B(seed) - calcu00602A(seed) + calcu00002A(seed));
</script>

<template>
  <div class="blk">comp00507: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(319 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(139 50% 50%);
  display: inline-block;
}
</style>
