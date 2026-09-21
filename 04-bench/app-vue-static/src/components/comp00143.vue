<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00690A, calcu00995A, calcu01221B, calcu00902B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00690A(seed) - calcu00995A(seed) + calcu01221B(seed) - calcu00902B(seed));
</script>

<template>
  <div class="blk">comp00143: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(80 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(260 50% 50%);
  display: inline-block;
}
</style>
