<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00650B, calcu00356A, calcu01006B, calcu00995A, calcu01381A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00650B(seed) - calcu00356A(seed) + calcu01006B(seed) - calcu00995A(seed) + calcu01381A(seed));
</script>

<template>
  <div class="blk">comp01055: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(16 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(196 50% 50%);
  display: inline-block;
}
</style>
