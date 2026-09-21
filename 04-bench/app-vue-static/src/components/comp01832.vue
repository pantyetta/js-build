<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00522B, calcu00754A, calcu00884A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00522B(seed) - calcu00754A(seed) + calcu00884A(seed));
</script>

<template>
  <div class="blk">comp01832: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(110 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(290 50% 50%);
  display: inline-block;
}
</style>
