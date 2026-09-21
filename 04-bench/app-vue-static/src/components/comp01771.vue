<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01285B, calcu00452A, calcu01063B, calcu01245B } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01285B(seed) - calcu00452A(seed) + calcu01063B(seed) - calcu01245B(seed));
</script>

<template>
  <div class="blk">comp01771: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(284 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(104 50% 50%);
  display: inline-block;
}
</style>
