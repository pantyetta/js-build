<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00192A, calcu00826B, calcu01210A, calcu00829A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu00192A(seed) - calcu00826B(seed) + calcu01210A(seed) - calcu00829A(seed));
</script>

<template>
  <div class="blk">comp01502: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(170 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(350 50% 50%);
  display: inline-block;
}
</style>
