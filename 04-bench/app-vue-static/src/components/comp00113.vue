<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00048A, calcu01291B, calcu00626A, calcu00279B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu00048A(seed) - calcu01291B(seed) + calcu00626A(seed) - calcu00279B(seed));
</script>

<template>
  <div class="blk">comp00113: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(225 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(45 50% 50%);
  display: inline-block;
}
</style>
