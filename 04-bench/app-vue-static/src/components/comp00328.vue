<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00065B, calcu01570B, calcu01079A, calcu00171B, calcu00969A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00065B(seed) - calcu01570B(seed) + calcu01079A(seed) - calcu00171B(seed) + calcu00969A(seed));
</script>

<template>
  <div class="blk">comp00328: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(343 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(163 50% 50%);
  display: inline-block;
}
</style>
