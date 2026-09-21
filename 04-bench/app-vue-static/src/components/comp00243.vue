<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01212B, calcu01342B, calcu00790A, calcu00833A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01212B(seed) - calcu01342B(seed) + calcu00790A(seed) - calcu00833A(seed));
</script>

<template>
  <div class="blk">comp00243: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(261 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(81 50% 50%);
  display: inline-block;
}
</style>
