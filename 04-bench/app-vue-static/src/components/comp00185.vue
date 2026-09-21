<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00362A, calcu01045A, calcu01198A, calcu00689B, calcu01217A } from '../lib/index.js';

const seed = 22;
const total = computed(() => calcu00362A(seed) - calcu01045A(seed) + calcu01198A(seed) - calcu00689B(seed) + calcu01217A(seed));
</script>

<template>
  <div class="blk">comp00185: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(77 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(257 50% 50%);
  display: inline-block;
}
</style>
