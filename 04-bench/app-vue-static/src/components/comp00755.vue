<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00734B, calcu01410A, calcu00361A, calcu01069B } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00734B(seed) - calcu01410A(seed) + calcu00361A(seed) - calcu01069B(seed));
</script>

<template>
  <div class="blk">comp00755: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(186 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(6 50% 50%);
  display: inline-block;
}
</style>
