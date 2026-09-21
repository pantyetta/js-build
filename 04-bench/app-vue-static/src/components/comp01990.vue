<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01291A, calcu00966B, calcu01590A, calcu01416B, calcu00805A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01291A(seed) - calcu00966B(seed) + calcu01590A(seed) - calcu01416B(seed) + calcu00805A(seed));
</script>

<template>
  <div class="blk">comp01990: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(57 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(237 50% 50%);
  display: inline-block;
}
</style>
