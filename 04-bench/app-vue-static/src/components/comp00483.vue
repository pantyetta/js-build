<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01413B, calcu00140A, calcu01022A, calcu00510B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01413B(seed) - calcu00140A(seed) + calcu01022A(seed) - calcu00510B(seed));
</script>

<template>
  <div class="blk">comp00483: {{ total }}</div>
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
