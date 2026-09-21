<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01159A, calcu00376B, calcu00131B, calcu00261B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01159A(seed) - calcu00376B(seed) + calcu00131B(seed) - calcu00261B(seed));
</script>

<template>
  <div class="blk">comp01515: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(214 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(34 50% 50%);
  display: inline-block;
}
</style>
