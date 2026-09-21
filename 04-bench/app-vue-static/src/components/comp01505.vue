<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00339A, calcu01179B, calcu01277B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00339A(seed) - calcu01179B(seed) + calcu01277B(seed));
</script>

<template>
  <div class="blk">comp01505: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(198 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(18 50% 50%);
  display: inline-block;
}
</style>
