<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01237A, calcu00682A, calcu00629A, calcu01441B, calcu00949A } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu01237A(seed) - calcu00682A(seed) + calcu00629A(seed) - calcu01441B(seed) + calcu00949A(seed));
</script>

<template>
  <div class="blk">comp00718: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(280 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(100 50% 50%);
  display: inline-block;
}
</style>
