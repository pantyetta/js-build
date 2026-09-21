<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00930B, calcu00459B, calcu00469B, calcu00750A, calcu00868B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00930B(seed) - calcu00459B(seed) + calcu00469B(seed) - calcu00750A(seed) + calcu00868B(seed));
</script>

<template>
  <div class="blk">comp01702: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(135 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(315 50% 50%);
  display: inline-block;
}
</style>
