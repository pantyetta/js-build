<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00516B, calcu01142A, calcu01519B, calcu01296B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00516B(seed) - calcu01142A(seed) + calcu01519B(seed) - calcu01296B(seed));
</script>

<template>
  <div class="blk">comp00628: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(344 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(164 50% 50%);
  display: inline-block;
}
</style>
