<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00546B, calcu01114B, calcu00368B, calcu00668A, calcu00050B } from '../lib/index.js';

const seed = 8;
const total = computed(() => calcu00546B(seed) - calcu01114B(seed) + calcu00368B(seed) - calcu00668A(seed) + calcu00050B(seed));
</script>

<template>
  <div class="blk">comp01111: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(254 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(74 50% 50%);
  display: inline-block;
}
</style>
