<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01442B, calcu01133A, calcu01377A, calcu01043A, calcu00257A } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01442B(seed) - calcu01133A(seed) + calcu01377A(seed) - calcu01043A(seed) + calcu00257A(seed));
</script>

<template>
  <div class="blk">comp01283: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(108 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(288 50% 50%);
  display: inline-block;
}
</style>
