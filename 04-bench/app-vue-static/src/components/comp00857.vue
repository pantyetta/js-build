<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00230B, calcu00290B, calcu01278A, calcu00382B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00230B(seed) - calcu00290B(seed) + calcu01278A(seed) - calcu00382B(seed));
</script>

<template>
  <div class="blk">comp00857: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(258 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(78 50% 50%);
  display: inline-block;
}
</style>
