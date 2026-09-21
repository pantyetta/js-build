<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00084A, calcu01508A, calcu01001A, calcu01323A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00084A(seed) - calcu01508A(seed) + calcu01001A(seed) - calcu01323A(seed));
</script>

<template>
  <div class="blk">comp00505: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(197 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(17 50% 50%);
  display: inline-block;
}
</style>
