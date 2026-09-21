<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00446A, calcu00834A, calcu00527B, calcu00423A } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00446A(seed) - calcu00834A(seed) + calcu00527B(seed) - calcu00423A(seed));
</script>

<template>
  <div class="blk">comp01763: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(115 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(295 50% 50%);
  display: inline-block;
}
</style>
