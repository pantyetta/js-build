<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01084A, calcu00256A, calcu00648B, calcu01196B, calcu01021B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01084A(seed) - calcu00256A(seed) + calcu00648B(seed) - calcu01196B(seed) + calcu01021B(seed));
</script>

<template>
  <div class="blk">comp01826: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(307 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(127 50% 50%);
  display: inline-block;
}
</style>
