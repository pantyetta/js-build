<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00118A, calcu00093A, calcu00088A } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu00118A(seed) - calcu00093A(seed) + calcu00088A(seed));
</script>

<template>
  <div class="blk">comp01120: {{ total }}</div>
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
