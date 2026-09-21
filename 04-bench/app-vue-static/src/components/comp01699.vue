<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00567A, calcu00662A, calcu00562B, calcu01434B, calcu00816B } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu00567A(seed) - calcu00662A(seed) + calcu00562B(seed) - calcu01434B(seed) + calcu00816B(seed));
</script>

<template>
  <div class="blk">comp01699: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(52 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(232 50% 50%);
  display: inline-block;
}
</style>
