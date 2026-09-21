<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00014A, calcu00026A, calcu00811B, calcu00683B } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00014A(seed) - calcu00026A(seed) + calcu00811B(seed) - calcu00683B(seed));
</script>

<template>
  <div class="blk">comp01539: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(256 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(76 50% 50%);
  display: inline-block;
}
</style>
