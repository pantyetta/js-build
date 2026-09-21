<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01257A, calcu01532B, calcu00370B, calcu01193A, calcu01138B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01257A(seed) - calcu01532B(seed) + calcu00370B(seed) - calcu01193A(seed) + calcu01138B(seed));
</script>

<template>
  <div class="blk">comp00373: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(285 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(105 50% 50%);
  display: inline-block;
}
</style>
