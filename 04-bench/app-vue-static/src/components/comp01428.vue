<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00227A, calcu00917B, calcu01318B, calcu00042B, calcu01275B } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00227A(seed) - calcu00917B(seed) + calcu01318B(seed) - calcu00042B(seed) + calcu01275B(seed));
</script>

<template>
  <div class="blk">comp01428: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(49 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(229 50% 50%);
  display: inline-block;
}
</style>
