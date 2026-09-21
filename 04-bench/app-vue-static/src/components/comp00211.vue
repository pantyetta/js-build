<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01235A, calcu00648B, calcu01326A, calcu00243A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01235A(seed) - calcu00648B(seed) + calcu01326A(seed) - calcu00243A(seed));
</script>

<template>
  <div class="blk">comp00211: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(124 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(304 50% 50%);
  display: inline-block;
}
</style>
