<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00675A, calcu00590B, calcu01267A, calcu01405A, calcu01493B } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu00675A(seed) - calcu00590B(seed) + calcu01267A(seed) - calcu01405A(seed) + calcu01493B(seed));
</script>

<template>
  <div class="blk">comp00537: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(25 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(205 50% 50%);
  display: inline-block;
}
</style>
