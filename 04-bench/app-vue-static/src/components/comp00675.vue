<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00902B, calcu00335A, calcu00169B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00902B(seed) - calcu00335A(seed) + calcu00169B(seed));
</script>

<template>
  <div class="blk">comp00675: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(178 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(358 50% 50%);
  display: inline-block;
}
</style>
