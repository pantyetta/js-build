<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00700B, calcu00604B, calcu01160B, calcu01476A, calcu01581B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu00700B(seed) - calcu00604B(seed) + calcu01160B(seed) - calcu01476A(seed) + calcu01581B(seed));
</script>

<template>
  <div class="blk">comp01662: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(349 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(169 50% 50%);
  display: inline-block;
}
</style>
