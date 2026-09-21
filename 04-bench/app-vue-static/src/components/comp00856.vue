<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01289B, calcu01491B, calcu00686A } from '../lib/index.js';

const seed = 7;
const total = computed(() => calcu01289B(seed) - calcu01491B(seed) + calcu00686A(seed));
</script>

<template>
  <div class="blk">comp00856: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(227 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(47 50% 50%);
  display: inline-block;
}
</style>
