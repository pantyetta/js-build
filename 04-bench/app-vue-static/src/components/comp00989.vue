<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00746A, calcu00834B, calcu00117B, calcu00837B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00746A(seed) - calcu00834B(seed) + calcu00117B(seed) - calcu00837B(seed));
</script>

<template>
  <div class="blk">comp00989: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(342 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(162 50% 50%);
  display: inline-block;
}
</style>
