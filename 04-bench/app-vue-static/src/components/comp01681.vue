<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00263A, calcu01267B, calcu00161B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00263A(seed) - calcu01267B(seed) + calcu00161B(seed));
</script>

<template>
  <div class="blk">comp01681: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(291 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(111 50% 50%);
  display: inline-block;
}
</style>
