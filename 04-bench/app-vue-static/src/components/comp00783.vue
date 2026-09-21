<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00502B, calcu00804B, calcu01346A, calcu00722A, calcu00047A } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00502B(seed) - calcu00804B(seed) + calcu01346A(seed) - calcu00722A(seed) + calcu00047A(seed));
</script>

<template>
  <div class="blk">comp00783: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(178 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(358 50% 50%);
  display: inline-block;
}
</style>
