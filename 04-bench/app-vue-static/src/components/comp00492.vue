<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01237A, calcu01513B, calcu01377A, calcu00580B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01237A(seed) - calcu01513B(seed) + calcu01377A(seed) - calcu00580B(seed));
</script>

<template>
  <div class="blk">comp00492: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(46 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(226 50% 50%);
  display: inline-block;
}
</style>
