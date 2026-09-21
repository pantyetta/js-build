<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01359A, calcu01070B, calcu01229B, calcu00430B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01359A(seed) - calcu01070B(seed) + calcu01229B(seed) - calcu00430B(seed));
</script>

<template>
  <div class="blk">comp01014: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(65 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(245 50% 50%);
  display: inline-block;
}
</style>
