<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00117B, calcu01290A, calcu00370A, calcu01130A, calcu01435A } from '../lib/index.js';

const seed = 5;
const total = computed(() => calcu00117B(seed) - calcu01290A(seed) + calcu00370A(seed) - calcu01130A(seed) + calcu01435A(seed));
</script>

<template>
  <div class="blk">comp00340: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(244 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(64 50% 50%);
  display: inline-block;
}
</style>
