<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01296B, calcu00741B, calcu01463A, calcu00425B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01296B(seed) - calcu00741B(seed) + calcu01463A(seed) - calcu00425B(seed));
</script>

<template>
  <div class="blk">comp00653: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(340 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(160 50% 50%);
  display: inline-block;
}
</style>
