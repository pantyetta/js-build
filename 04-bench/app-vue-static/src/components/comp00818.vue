<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00893B, calcu00479A, calcu01521A, calcu01249B } from '../lib/index.js';

const seed = 35;
const total = computed(() => calcu00893B(seed) - calcu00479A(seed) + calcu01521A(seed) - calcu01249B(seed));
</script>

<template>
  <div class="blk">comp00818: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(350 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(170 50% 50%);
  display: inline-block;
}
</style>
