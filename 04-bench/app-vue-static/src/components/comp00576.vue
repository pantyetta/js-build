<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01503B, calcu01273A, calcu00094A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01503B(seed) - calcu01273A(seed) + calcu00094A(seed));
</script>

<template>
  <div class="blk">comp00576: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(78 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(258 50% 50%);
  display: inline-block;
}
</style>
