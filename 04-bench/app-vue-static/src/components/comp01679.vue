<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00236A, calcu01593A, calcu00051A, calcu01223B, calcu00274B } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00236A(seed) - calcu01593A(seed) + calcu00051A(seed) - calcu01223B(seed) + calcu00274B(seed));
</script>

<template>
  <div class="blk">comp01679: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(21 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(201 50% 50%);
  display: inline-block;
}
</style>
