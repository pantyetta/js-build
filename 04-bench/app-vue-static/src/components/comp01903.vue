<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00237A, calcu00845A, calcu01352A, calcu00920B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00237A(seed) - calcu00845A(seed) + calcu01352A(seed) - calcu00920B(seed));
</script>

<template>
  <div class="blk">comp01903: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(111 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(291 50% 50%);
  display: inline-block;
}
</style>
