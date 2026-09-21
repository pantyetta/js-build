<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00551A, calcu00313A, calcu01397B } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00551A(seed) - calcu00313A(seed) + calcu01397B(seed));
</script>

<template>
  <div class="blk">comp01497: {{ total }}</div>
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
