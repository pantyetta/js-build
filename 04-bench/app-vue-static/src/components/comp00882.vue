<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00630B, calcu00959B, calcu01489B, calcu00598A } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu00630B(seed) - calcu00959B(seed) + calcu01489B(seed) - calcu00598A(seed));
</script>

<template>
  <div class="blk">comp00882: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(95 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(275 50% 50%);
  display: inline-block;
}
</style>
