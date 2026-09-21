<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00951B, calcu01028A, calcu00913B, calcu01255B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00951B(seed) - calcu01028A(seed) + calcu00913B(seed) - calcu01255B(seed));
</script>

<template>
  <div class="blk">comp01424: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(248 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(68 50% 50%);
  display: inline-block;
}
</style>
