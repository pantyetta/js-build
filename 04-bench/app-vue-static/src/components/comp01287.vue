<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00140A, calcu01203B, calcu00119B, calcu00069A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00140A(seed) - calcu01203B(seed) + calcu00119B(seed) - calcu00069A(seed));
</script>

<template>
  <div class="blk">comp01287: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(267 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(87 50% 50%);
  display: inline-block;
}
</style>
