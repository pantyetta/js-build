<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00874A, calcu00799B, calcu00050B, calcu01083A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00874A(seed) - calcu00799B(seed) + calcu00050B(seed) - calcu01083A(seed));
</script>

<template>
  <div class="blk">comp00322: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(55 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(235 50% 50%);
  display: inline-block;
}
</style>
