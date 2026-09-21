<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00221A, calcu00132B, calcu00737A, calcu00653A } from '../lib/index.js';

const seed = 13;
const total = computed(() => calcu00221A(seed) - calcu00132B(seed) + calcu00737A(seed) - calcu00653A(seed));
</script>

<template>
  <div class="blk">comp00024: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(168 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(348 50% 50%);
  display: inline-block;
}
</style>
