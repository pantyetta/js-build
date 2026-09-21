<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00451B, calcu01167B, calcu00912B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00451B(seed) - calcu01167B(seed) + calcu00912B(seed));
</script>

<template>
  <div class="blk">comp00880: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(200 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(20 50% 50%);
  display: inline-block;
}
</style>
