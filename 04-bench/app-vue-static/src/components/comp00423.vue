<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00411A, calcu00504B, calcu00820A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu00411A(seed) - calcu00504B(seed) + calcu00820A(seed));
</script>

<template>
  <div class="blk">comp00423: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(158 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(338 50% 50%);
  display: inline-block;
}
</style>
