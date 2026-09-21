<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00445A, calcu01482A, calcu01307A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00445A(seed) - calcu01482A(seed) + calcu01307A(seed));
</script>

<template>
  <div class="blk">comp00854: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(76 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(256 50% 50%);
  display: inline-block;
}
</style>
