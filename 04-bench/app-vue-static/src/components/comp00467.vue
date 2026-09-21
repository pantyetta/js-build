<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01202B, calcu01298A, calcu01192A, calcu00845A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01202B(seed) - calcu01298A(seed) + calcu01192A(seed) - calcu00845A(seed));
</script>

<template>
  <div class="blk">comp00467: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(31 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(211 50% 50%);
  display: inline-block;
}
</style>
