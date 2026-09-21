<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00231A, calcu00670B, calcu01043A, calcu00406B } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00231A(seed) - calcu00670B(seed) + calcu01043A(seed) - calcu00406B(seed));
</script>

<template>
  <div class="blk">comp01235: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(290 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(110 50% 50%);
  display: inline-block;
}
</style>
