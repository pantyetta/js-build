<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01101B, calcu01477B, calcu00534A } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu01101B(seed) - calcu01477B(seed) + calcu00534A(seed));
</script>

<template>
  <div class="blk">comp01481: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(274 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(94 50% 50%);
  display: inline-block;
}
</style>
