<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00223A, calcu00389A, calcu01580A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00223A(seed) - calcu00389A(seed) + calcu01580A(seed));
</script>

<template>
  <div class="blk">comp01483: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(28 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(208 50% 50%);
  display: inline-block;
}
</style>
