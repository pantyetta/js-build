<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00120B, calcu01396A, calcu00278B, calcu00943A, calcu01218A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00120B(seed) - calcu01396A(seed) + calcu00278B(seed) - calcu00943A(seed) + calcu01218A(seed));
</script>

<template>
  <div class="blk">comp00904: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(356 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(176 50% 50%);
  display: inline-block;
}
</style>
