<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00134B, calcu00290B, calcu01424B, calcu01165A, calcu00920B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00134B(seed) - calcu00290B(seed) + calcu01424B(seed) - calcu01165A(seed) + calcu00920B(seed));
</script>

<template>
  <div class="blk">comp01760: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(357 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(177 50% 50%);
  display: inline-block;
}
</style>
