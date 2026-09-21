<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00504B, calcu01070A, calcu00316A, calcu00344A, calcu01536B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00504B(seed) - calcu01070A(seed) + calcu00316A(seed) - calcu00344A(seed) + calcu01536B(seed));
</script>

<template>
  <div class="blk">comp00788: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(92 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(272 50% 50%);
  display: inline-block;
}
</style>
