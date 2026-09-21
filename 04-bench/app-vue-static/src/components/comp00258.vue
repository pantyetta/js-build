<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00681B, calcu00149B, calcu01049A, calcu01383A, calcu00680A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00681B(seed) - calcu00149B(seed) + calcu01049A(seed) - calcu01383A(seed) + calcu00680A(seed));
</script>

<template>
  <div class="blk">comp00258: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(260 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(80 50% 50%);
  display: inline-block;
}
</style>
