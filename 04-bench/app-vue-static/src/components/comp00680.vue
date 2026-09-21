<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00004A, calcu00615B, calcu00367B, calcu01087A, calcu01446A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00004A(seed) - calcu00615B(seed) + calcu00367B(seed) - calcu01087A(seed) + calcu01446A(seed));
</script>

<template>
  <div class="blk">comp00680: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(140 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(320 50% 50%);
  display: inline-block;
}
</style>
