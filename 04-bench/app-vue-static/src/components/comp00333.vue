<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01599A, calcu01010B, calcu01041B, calcu01513A } from '../lib/index.js';

const seed = 31;
const total = computed(() => calcu01599A(seed) - calcu01010B(seed) + calcu01041B(seed) - calcu01513A(seed));
</script>

<template>
  <div class="blk">comp00333: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
