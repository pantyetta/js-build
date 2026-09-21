<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01525B, calcu01289B, calcu00774A, calcu00793B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01525B(seed) - calcu01289B(seed) + calcu00774A(seed) - calcu00793B(seed));
</script>

<template>
  <div class="blk">comp01717: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(348 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(168 50% 50%);
  display: inline-block;
}
</style>
