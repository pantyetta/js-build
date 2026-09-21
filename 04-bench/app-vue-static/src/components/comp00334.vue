<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00429A, calcu01361A, calcu00913A, calcu00426A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu00429A(seed) - calcu01361A(seed) + calcu00913A(seed) - calcu00426A(seed));
</script>

<template>
  <div class="blk">comp00334: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(1 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(181 50% 50%);
  display: inline-block;
}
</style>
