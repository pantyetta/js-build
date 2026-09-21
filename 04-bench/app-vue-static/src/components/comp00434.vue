<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01223A, calcu01520B, calcu01377A, calcu00524A, calcu00433B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu01223A(seed) - calcu01520B(seed) + calcu01377A(seed) - calcu00524A(seed) + calcu00433B(seed));
</script>

<template>
  <div class="blk">comp00434: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>
