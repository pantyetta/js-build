<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00835A, calcu00468A, calcu01047A, calcu00676B, calcu01508A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00835A(seed) - calcu00468A(seed) + calcu01047A(seed) - calcu00676B(seed) + calcu01508A(seed));
</script>

<template>
  <div class="blk">comp01841: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(188 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(8 50% 50%);
  display: inline-block;
}
</style>
