<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00046A, calcu00537B, calcu01379B, calcu01074A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu00046A(seed) - calcu00537B(seed) + calcu01379B(seed) - calcu01074A(seed));
</script>

<template>
  <div class="blk">comp00644: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(305 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(125 50% 50%);
  display: inline-block;
}
</style>
