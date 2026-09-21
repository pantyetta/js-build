<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00868B, calcu01400A, calcu00583B, calcu00222B, calcu00827A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00868B(seed) - calcu01400A(seed) + calcu00583B(seed) - calcu00222B(seed) + calcu00827A(seed));
</script>

<template>
  <div class="blk">comp01003: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(295 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(115 50% 50%);
  display: inline-block;
}
</style>
