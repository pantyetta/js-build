<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00844A, calcu00460A, calcu00276B } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00844A(seed) - calcu00460A(seed) + calcu00276B(seed));
</script>

<template>
  <div class="blk">comp00220: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(72 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(252 50% 50%);
  display: inline-block;
}
</style>
