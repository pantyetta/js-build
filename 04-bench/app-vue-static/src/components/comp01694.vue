<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01289B, calcu01513B, calcu00905A, calcu01001B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01289B(seed) - calcu01513B(seed) + calcu00905A(seed) - calcu01001B(seed));
</script>

<template>
  <div class="blk">comp01694: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(337 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(157 50% 50%);
  display: inline-block;
}
</style>
