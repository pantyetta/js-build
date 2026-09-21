<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00230A, calcu00312B, calcu00242A, calcu00511A, calcu00542B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00230A(seed) - calcu00312B(seed) + calcu00242A(seed) - calcu00511A(seed) + calcu00542B(seed));
</script>

<template>
  <div class="blk">comp00514: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(354 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(174 50% 50%);
  display: inline-block;
}
</style>
