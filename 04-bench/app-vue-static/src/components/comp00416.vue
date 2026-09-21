<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00975A, calcu00524B, calcu00268B, calcu01483B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00975A(seed) - calcu00524B(seed) + calcu00268B(seed) - calcu01483B(seed));
</script>

<template>
  <div class="blk">comp00416: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(68 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(248 50% 50%);
  display: inline-block;
}
</style>
