<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00885B, calcu01377A, calcu00133A, calcu01264B, calcu00545B } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu00885B(seed) - calcu01377A(seed) + calcu00133A(seed) - calcu01264B(seed) + calcu00545B(seed));
</script>

<template>
  <div class="blk">comp01410: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(144 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(324 50% 50%);
  display: inline-block;
}
</style>
