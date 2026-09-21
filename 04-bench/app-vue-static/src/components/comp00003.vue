<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00676B, calcu01132A, calcu00365B } from '../lib/index.js';

const seed = 27;
const total = computed(() => calcu00676B(seed) - calcu01132A(seed) + calcu00365B(seed));
</script>

<template>
  <div class="blk">comp00003: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(49 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(229 50% 50%);
  display: inline-block;
}
</style>
