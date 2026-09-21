<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00935B, calcu01439A, calcu01037A, calcu00288B, calcu01000A } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00935B(seed) - calcu01439A(seed) + calcu01037A(seed) - calcu00288B(seed) + calcu01000A(seed));
</script>

<template>
  <div class="blk">comp00121: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(105 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(285 50% 50%);
  display: inline-block;
}
</style>
