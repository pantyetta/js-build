<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01487B, calcu00570B, calcu01055A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu01487B(seed) - calcu00570B(seed) + calcu01055A(seed));
</script>

<template>
  <div class="blk">comp01459: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(303 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(123 50% 50%);
  display: inline-block;
}
</style>
