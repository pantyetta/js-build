<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00906B, calcu00707B, calcu01550A, calcu01188B } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00906B(seed) - calcu00707B(seed) + calcu01550A(seed) - calcu01188B(seed));
</script>

<template>
  <div class="blk">comp00476: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(257 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(77 50% 50%);
  display: inline-block;
}
</style>
