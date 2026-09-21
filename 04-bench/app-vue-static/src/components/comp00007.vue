<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00042A, calcu00121A, calcu00410B, calcu00508B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00042A(seed) - calcu00121A(seed) + calcu00410B(seed) - calcu00508B(seed));
</script>

<template>
  <div class="blk">comp00007: {{ total }}</div>
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
