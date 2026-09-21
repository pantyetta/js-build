<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01065A, calcu01344B, calcu01160A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01065A(seed) - calcu01344B(seed) + calcu01160A(seed));
</script>

<template>
  <div class="blk">comp01745: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(197 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(17 50% 50%);
  display: inline-block;
}
</style>
