<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01074A, calcu00062A, calcu01198A } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu01074A(seed) - calcu00062A(seed) + calcu01198A(seed));
</script>

<template>
  <div class="blk">comp01532: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(25 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(205 50% 50%);
  display: inline-block;
}
</style>
