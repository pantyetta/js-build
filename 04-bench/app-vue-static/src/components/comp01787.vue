<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00597B, calcu01552B, calcu00518A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00597B(seed) - calcu01552B(seed) + calcu00518A(seed));
</script>

<template>
  <div class="blk">comp01787: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(148 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(328 50% 50%);
  display: inline-block;
}
</style>
