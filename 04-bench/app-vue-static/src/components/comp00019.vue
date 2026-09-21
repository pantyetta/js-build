<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00650A, calcu01005B, calcu01491A, calcu00281A } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00650A(seed) - calcu01005B(seed) + calcu01491A(seed) - calcu00281A(seed));
</script>

<template>
  <div class="blk">comp00019: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(44 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(224 50% 50%);
  display: inline-block;
}
</style>
