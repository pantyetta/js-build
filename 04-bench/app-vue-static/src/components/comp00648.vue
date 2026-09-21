<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00554B, calcu00521B, calcu00787A, calcu01531A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu00554B(seed) - calcu00521B(seed) + calcu00787A(seed) - calcu01531A(seed));
</script>

<template>
  <div class="blk">comp00648: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(234 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(54 50% 50%);
  display: inline-block;
}
</style>
