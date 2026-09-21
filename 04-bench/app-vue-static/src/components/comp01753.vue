<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00986A, calcu01438B, calcu00488A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00986A(seed) - calcu01438B(seed) + calcu00488A(seed));
</script>

<template>
  <div class="blk">comp01753: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(183 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(3 50% 50%);
  display: inline-block;
}
</style>
