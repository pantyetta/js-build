<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00754B, calcu01311B, calcu01145A, calcu00318B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu00754B(seed) - calcu01311B(seed) + calcu01145A(seed) - calcu00318B(seed));
</script>

<template>
  <div class="blk">comp01457: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(278 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(98 50% 50%);
  display: inline-block;
}
</style>
