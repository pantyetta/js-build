<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00069A, calcu01309A, calcu01487B } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu00069A(seed) - calcu01309A(seed) + calcu01487B(seed));
</script>

<template>
  <div class="blk">comp01074: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
