<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01442B, calcu00859B, calcu00555B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01442B(seed) - calcu00859B(seed) + calcu00555B(seed));
</script>

<template>
  <div class="blk">comp01461: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(128 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(308 50% 50%);
  display: inline-block;
}
</style>
