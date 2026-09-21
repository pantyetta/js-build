<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00882A, calcu01042B, calcu00561B, calcu00210B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00882A(seed) - calcu01042B(seed) + calcu00561B(seed) - calcu00210B(seed));
</script>

<template>
  <div class="blk">comp00335: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(189 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(9 50% 50%);
  display: inline-block;
}
</style>
