<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00868B, calcu01378B, calcu01348B, calcu01296B, calcu00030B } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu00868B(seed) - calcu01378B(seed) + calcu01348B(seed) - calcu01296B(seed) + calcu00030B(seed));
</script>

<template>
  <div class="blk">comp01148: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(2 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(182 50% 50%);
  display: inline-block;
}
</style>
