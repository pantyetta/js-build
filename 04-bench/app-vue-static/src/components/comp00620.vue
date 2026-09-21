<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01328B, calcu00528A, calcu00575B, calcu00440B, calcu00674A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01328B(seed) - calcu00528A(seed) + calcu00575B(seed) - calcu00440B(seed) + calcu00674A(seed));
</script>

<template>
  <div class="blk">comp00620: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(232 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(52 50% 50%);
  display: inline-block;
}
</style>
