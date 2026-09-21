<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00713A, calcu00730B, calcu00430A, calcu01541A, calcu00072B } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu00713A(seed) - calcu00730B(seed) + calcu00430A(seed) - calcu01541A(seed) + calcu00072B(seed));
</script>

<template>
  <div class="blk">comp00482: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(292 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(112 50% 50%);
  display: inline-block;
}
</style>
