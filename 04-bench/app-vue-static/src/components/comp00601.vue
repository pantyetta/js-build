<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01143A, calcu00608B, calcu00628A, calcu01445A, calcu00258A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu01143A(seed) - calcu00608B(seed) + calcu00628A(seed) - calcu01445A(seed) + calcu00258A(seed));
</script>

<template>
  <div class="blk">comp00601: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(246 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(66 50% 50%);
  display: inline-block;
}
</style>
