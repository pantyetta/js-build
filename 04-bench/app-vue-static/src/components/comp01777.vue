<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00047B, calcu01557A, calcu00082A, calcu00603A, calcu00118A } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu00047B(seed) - calcu01557A(seed) + calcu00082A(seed) - calcu00603A(seed) + calcu00118A(seed));
</script>

<template>
  <div class="blk">comp01777: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(227 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(47 50% 50%);
  display: inline-block;
}
</style>
