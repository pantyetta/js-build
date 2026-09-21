<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01174B, calcu00581B, calcu00437B, calcu00745A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu01174B(seed) - calcu00581B(seed) + calcu00437B(seed) - calcu00745A(seed));
</script>

<template>
  <div class="blk">comp01513: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(225 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(45 50% 50%);
  display: inline-block;
}
</style>
