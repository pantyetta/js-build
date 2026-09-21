<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00447A, calcu01215A, calcu00715B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu00447A(seed) - calcu01215A(seed) + calcu00715B(seed));
</script>

<template>
  <div class="blk">comp00931: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(319 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(139 50% 50%);
  display: inline-block;
}
</style>
