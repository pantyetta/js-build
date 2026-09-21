<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00585B, calcu01384A, calcu01378B, calcu00931B, calcu00864B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00585B(seed) - calcu01384A(seed) + calcu01378B(seed) - calcu00931B(seed) + calcu00864B(seed));
</script>

<template>
  <div class="blk">comp00887: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(359 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(179 50% 50%);
  display: inline-block;
}
</style>
