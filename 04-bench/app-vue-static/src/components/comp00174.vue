<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01099A, calcu00852A, calcu00976A, calcu00483A, calcu00985A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01099A(seed) - calcu00852A(seed) + calcu00976A(seed) - calcu00483A(seed) + calcu00985A(seed));
</script>

<template>
  <div class="blk">comp00174: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(190 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(10 50% 50%);
  display: inline-block;
}
</style>
