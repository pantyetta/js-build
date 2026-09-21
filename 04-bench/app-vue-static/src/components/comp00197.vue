<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00931A, calcu01294B, calcu01268B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00931A(seed) - calcu01294B(seed) + calcu01268B(seed));
</script>

<template>
  <div class="blk">comp00197: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(83 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(263 50% 50%);
  display: inline-block;
}
</style>
