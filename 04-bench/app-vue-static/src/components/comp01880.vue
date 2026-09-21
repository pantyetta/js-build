<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01089B, calcu00873B, calcu00846B } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01089B(seed) - calcu00873B(seed) + calcu00846B(seed));
</script>

<template>
  <div class="blk">comp01880: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(56 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(236 50% 50%);
  display: inline-block;
}
</style>
