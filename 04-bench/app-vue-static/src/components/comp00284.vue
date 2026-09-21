<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00583B, calcu00934B, calcu01383A, calcu00708B, calcu00074B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00583B(seed) - calcu00934B(seed) + calcu01383A(seed) - calcu00708B(seed) + calcu00074B(seed));
</script>

<template>
  <div class="blk">comp00284: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(350 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(170 50% 50%);
  display: inline-block;
}
</style>
