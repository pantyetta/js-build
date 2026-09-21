<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00268B, calcu00029A, calcu00546A, calcu00828B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00268B(seed) - calcu00029A(seed) + calcu00546A(seed) - calcu00828B(seed));
</script>

<template>
  <div class="blk">comp00159: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(76 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(256 50% 50%);
  display: inline-block;
}
</style>
