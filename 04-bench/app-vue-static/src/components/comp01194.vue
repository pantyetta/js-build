<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01203B, calcu00127A, calcu01179B, calcu00622B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01203B(seed) - calcu00127A(seed) + calcu01179B(seed) - calcu00622B(seed));
</script>

<template>
  <div class="blk">comp01194: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(299 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(119 50% 50%);
  display: inline-block;
}
</style>
