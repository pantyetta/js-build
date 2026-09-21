<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00943A, calcu01530A, calcu01066B, calcu00652A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00943A(seed) - calcu01530A(seed) + calcu01066B(seed) - calcu00652A(seed));
</script>

<template>
  <div class="blk">comp00547: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
