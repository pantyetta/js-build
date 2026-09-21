<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01059B, calcu01171B, calcu00775B, calcu00180A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01059B(seed) - calcu01171B(seed) + calcu00775B(seed) - calcu00180A(seed));
</script>

<template>
  <div class="blk">comp00830: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(340 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(160 50% 50%);
  display: inline-block;
}
</style>
