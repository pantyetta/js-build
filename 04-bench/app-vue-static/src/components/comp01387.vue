<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00676B, calcu01079B, calcu01545B, calcu00237B, calcu00755A } from '../lib/index.js';

const seed = 24;
const total = computed(() => calcu00676B(seed) - calcu01079B(seed) + calcu01545B(seed) - calcu00237B(seed) + calcu00755A(seed));
</script>

<template>
  <div class="blk">comp01387: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(9 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(189 50% 50%);
  display: inline-block;
}
</style>
