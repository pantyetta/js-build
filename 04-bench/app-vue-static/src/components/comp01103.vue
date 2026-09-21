<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00996A, calcu01302B, calcu00507B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00996A(seed) - calcu01302B(seed) + calcu00507B(seed));
</script>

<template>
  <div class="blk">comp01103: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(342 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(162 50% 50%);
  display: inline-block;
}
</style>
