<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01151A, calcu00440A, calcu00279A, calcu00059A, calcu00545A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01151A(seed) - calcu00440A(seed) + calcu00279A(seed) - calcu00059A(seed) + calcu00545A(seed));
</script>

<template>
  <div class="blk">comp00035: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(221 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(41 50% 50%);
  display: inline-block;
}
</style>
