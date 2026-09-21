<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01065B, calcu00445A, calcu01399B } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01065B(seed) - calcu00445A(seed) + calcu01399B(seed));
</script>

<template>
  <div class="blk">comp01966: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(16 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(196 50% 50%);
  display: inline-block;
}
</style>
