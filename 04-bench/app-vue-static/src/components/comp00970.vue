<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00265A, calcu00934A, calcu00543B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00265A(seed) - calcu00934A(seed) + calcu00543B(seed));
</script>

<template>
  <div class="blk">comp00970: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(109 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(289 50% 50%);
  display: inline-block;
}
</style>
