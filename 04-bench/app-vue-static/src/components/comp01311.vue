<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00928A, calcu00801B, calcu00939A, calcu00539A } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00928A(seed) - calcu00801B(seed) + calcu00939A(seed) - calcu00539A(seed));
</script>

<template>
  <div class="blk">comp01311: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(30 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(210 50% 50%);
  display: inline-block;
}
</style>
