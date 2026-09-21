<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00885B, calcu00995A, calcu01329A, calcu01564A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00885B(seed) - calcu00995A(seed) + calcu01329A(seed) - calcu01564A(seed));
</script>

<template>
  <div class="blk">comp01905: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(353 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(173 50% 50%);
  display: inline-block;
}
</style>
