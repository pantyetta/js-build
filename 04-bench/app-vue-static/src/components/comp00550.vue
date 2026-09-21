<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01418B, calcu00431A, calcu00949B, calcu00017B, calcu00955A } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01418B(seed) - calcu00431A(seed) + calcu00949B(seed) - calcu00017B(seed) + calcu00955A(seed));
</script>

<template>
  <div class="blk">comp00550: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(264 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(84 50% 50%);
  display: inline-block;
}
</style>
