<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00917A, calcu01011A, calcu00080A, calcu00315A } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00917A(seed) - calcu01011A(seed) + calcu00080A(seed) - calcu00315A(seed));
</script>

<template>
  <div class="blk">comp01237: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(172 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(352 50% 50%);
  display: inline-block;
}
</style>
