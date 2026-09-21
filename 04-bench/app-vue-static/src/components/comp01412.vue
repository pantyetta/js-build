<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00289A, calcu01415A, calcu01277A } from '../lib/index.js';

const seed = 38;
const total = computed(() => calcu00289A(seed) - calcu01415A(seed) + calcu01277A(seed));
</script>

<template>
  <div class="blk">comp01412: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(192 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(12 50% 50%);
  display: inline-block;
}
</style>
