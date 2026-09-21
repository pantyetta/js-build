<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00405A, calcu01499A, calcu00557B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00405A(seed) - calcu01499A(seed) + calcu00557B(seed));
</script>

<template>
  <div class="blk">comp00748: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(43 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(223 50% 50%);
  display: inline-block;
}
</style>
