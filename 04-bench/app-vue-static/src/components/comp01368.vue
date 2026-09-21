<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00522A, calcu00758B, calcu00608A } from '../lib/index.js';

const seed = 21;
const total = computed(() => calcu00522A(seed) - calcu00758B(seed) + calcu00608A(seed));
</script>

<template>
  <div class="blk">comp01368: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(51 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(231 50% 50%);
  display: inline-block;
}
</style>
