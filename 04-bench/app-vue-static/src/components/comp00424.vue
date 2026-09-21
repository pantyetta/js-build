<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00525B, calcu00560A, calcu01470A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00525B(seed) - calcu00560A(seed) + calcu01470A(seed));
</script>

<template>
  <div class="blk">comp00424: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(5 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(185 50% 50%);
  display: inline-block;
}
</style>
