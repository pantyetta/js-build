<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00348B, calcu01045A, calcu00977B, calcu00776B, calcu00546B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00348B(seed) - calcu01045A(seed) + calcu00977B(seed) - calcu00776B(seed) + calcu00546B(seed));
</script>

<template>
  <div class="blk">comp00892: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(301 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(121 50% 50%);
  display: inline-block;
}
</style>
