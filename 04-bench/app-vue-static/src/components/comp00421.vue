<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00626B, calcu01515A, calcu00539B, calcu00967A, calcu01084A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00626B(seed) - calcu01515A(seed) + calcu00539B(seed) - calcu00967A(seed) + calcu01084A(seed));
</script>

<template>
  <div class="blk">comp00421: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(83 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(263 50% 50%);
  display: inline-block;
}
</style>
