<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01364B, calcu01280A, calcu00701A, calcu01445B, calcu01058B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu01364B(seed) - calcu01280A(seed) + calcu00701A(seed) - calcu01445B(seed) + calcu01058B(seed));
</script>

<template>
  <div class="blk">comp01648: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(75 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(255 50% 50%);
  display: inline-block;
}
</style>
