<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00771A, calcu00009A, calcu01057B, calcu00427A, calcu01091A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00771A(seed) - calcu00009A(seed) + calcu01057B(seed) - calcu00427A(seed) + calcu01091A(seed));
</script>

<template>
  <div class="blk">comp00105: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(262 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(82 50% 50%);
  display: inline-block;
}
</style>
