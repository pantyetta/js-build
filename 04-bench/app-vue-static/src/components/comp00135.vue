<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01258B, calcu00699B, calcu01027B, calcu01344A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01258B(seed) - calcu00699B(seed) + calcu01027B(seed) - calcu01344A(seed));
</script>

<template>
  <div class="blk">comp00135: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(215 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(35 50% 50%);
  display: inline-block;
}
</style>
