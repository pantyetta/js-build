<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00249A, calcu00054A, calcu00246A, calcu00208A, calcu00204B } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00249A(seed) - calcu00054A(seed) + calcu00246A(seed) - calcu00208A(seed) + calcu00204B(seed));
</script>

<template>
  <div class="blk">comp01682: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(342 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(162 50% 50%);
  display: inline-block;
}
</style>
