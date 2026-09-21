<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01303A, calcu00109A, calcu01505B, calcu00419A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01303A(seed) - calcu00109A(seed) + calcu01505B(seed) - calcu00419A(seed));
</script>

<template>
  <div class="blk">comp01686: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(344 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(164 50% 50%);
  display: inline-block;
}
</style>
