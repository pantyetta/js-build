<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01240B, calcu00939A, calcu00028B, calcu00928B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01240B(seed) - calcu00939A(seed) + calcu00028B(seed) - calcu00928B(seed));
</script>

<template>
  <div class="blk">comp00673: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(307 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(127 50% 50%);
  display: inline-block;
}
</style>
