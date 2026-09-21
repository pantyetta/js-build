<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00795A, calcu00840B, calcu00101B, calcu01147A, calcu00542A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00795A(seed) - calcu00840B(seed) + calcu00101B(seed) - calcu01147A(seed) + calcu00542A(seed));
</script>

<template>
  <div class="blk">comp00535: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(314 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(134 50% 50%);
  display: inline-block;
}
</style>
