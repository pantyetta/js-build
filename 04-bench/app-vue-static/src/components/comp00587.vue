<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00582B, calcu01049A, calcu01237A, calcu00514A, calcu00408A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00582B(seed) - calcu01049A(seed) + calcu01237A(seed) - calcu00514A(seed) + calcu00408A(seed));
</script>

<template>
  <div class="blk">comp00587: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(63 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(243 50% 50%);
  display: inline-block;
}
</style>
