<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00549B, calcu00122A, calcu00174B, calcu00536B } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00549B(seed) - calcu00122A(seed) + calcu00174B(seed) - calcu00536B(seed));
</script>

<template>
  <div class="blk">comp00747: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(286 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(106 50% 50%);
  display: inline-block;
}
</style>
