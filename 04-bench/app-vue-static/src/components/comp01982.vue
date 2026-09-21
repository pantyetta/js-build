<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01342B, calcu00541A, calcu00978A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu01342B(seed) - calcu00541A(seed) + calcu00978A(seed));
</script>

<template>
  <div class="blk">comp01982: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(302 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(122 50% 50%);
  display: inline-block;
}
</style>
