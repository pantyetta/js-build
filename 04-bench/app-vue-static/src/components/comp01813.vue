<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01495A, calcu00965A, calcu01186A, calcu00519B, calcu00817A } from '../lib/index.js';

const seed = 40;
const total = computed(() => calcu01495A(seed) - calcu00965A(seed) + calcu01186A(seed) - calcu00519B(seed) + calcu00817A(seed));
</script>

<template>
  <div class="blk">comp01813: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(314 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(134 50% 50%);
  display: inline-block;
}
</style>
