<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00032B, calcu00594A, calcu00397B, calcu00762B, calcu00500B } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00032B(seed) - calcu00594A(seed) + calcu00397B(seed) - calcu00762B(seed) + calcu00500B(seed));
</script>

<template>
  <div class="blk">comp01479: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(88 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(268 50% 50%);
  display: inline-block;
}
</style>
