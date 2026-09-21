<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01230A, calcu01369B, calcu01312B, calcu00612B } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01230A(seed) - calcu01369B(seed) + calcu01312B(seed) - calcu00612B(seed));
</script>

<template>
  <div class="blk">comp01859: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(145 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(325 50% 50%);
  display: inline-block;
}
</style>
