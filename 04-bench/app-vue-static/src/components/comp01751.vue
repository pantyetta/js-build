<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00279B, calcu01230B, calcu00417A, calcu01554A } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00279B(seed) - calcu01230B(seed) + calcu00417A(seed) - calcu01554A(seed));
</script>

<template>
  <div class="blk">comp01751: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(232 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(52 50% 50%);
  display: inline-block;
}
</style>
