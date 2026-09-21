<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01322B, calcu00740A, calcu00616A, calcu00265B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu01322B(seed) - calcu00740A(seed) + calcu00616A(seed) - calcu00265B(seed));
</script>

<template>
  <div class="blk">comp01462: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(349 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(169 50% 50%);
  display: inline-block;
}
</style>
