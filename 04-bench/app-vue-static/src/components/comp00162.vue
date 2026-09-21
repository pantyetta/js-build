<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00912A, calcu00725B, calcu00456A } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00912A(seed) - calcu00725B(seed) + calcu00456A(seed));
</script>

<template>
  <div class="blk">comp00162: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(302 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(122 50% 50%);
  display: inline-block;
}
</style>
