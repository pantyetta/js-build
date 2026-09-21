<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00203B, calcu00025A, calcu00178B, calcu01567A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00203B(seed) - calcu00025A(seed) + calcu00178B(seed) - calcu01567A(seed));
</script>

<template>
  <div class="blk">comp01475: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(332 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(152 50% 50%);
  display: inline-block;
}
</style>
