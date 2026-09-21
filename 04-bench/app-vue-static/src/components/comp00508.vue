<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01086A, calcu01239A, calcu00497A, calcu00297B, calcu00542B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01086A(seed) - calcu01239A(seed) + calcu00497A(seed) - calcu00297B(seed) + calcu00542B(seed));
</script>

<template>
  <div class="blk">comp00508: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(91 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(271 50% 50%);
  display: inline-block;
}
</style>
