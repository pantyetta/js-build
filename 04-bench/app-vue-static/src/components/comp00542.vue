<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01143B, calcu00751B, calcu01233A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01143B(seed) - calcu00751B(seed) + calcu01233A(seed));
</script>

<template>
  <div class="blk">comp00542: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(47 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(227 50% 50%);
  display: inline-block;
}
</style>
