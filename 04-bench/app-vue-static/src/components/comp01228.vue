<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01181B, calcu00806A, calcu00654B, calcu00910B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu01181B(seed) - calcu00806A(seed) + calcu00654B(seed) - calcu00910B(seed));
</script>

<template>
  <div class="blk">comp01228: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(323 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(143 50% 50%);
  display: inline-block;
}
</style>
