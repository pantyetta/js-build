<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01435B, calcu01480B, calcu01006A } from '../lib/index.js';

const seed = 6;
const total = computed(() => calcu01435B(seed) - calcu01480B(seed) + calcu01006A(seed));
</script>

<template>
  <div class="blk">comp01245: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(12 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(192 50% 50%);
  display: inline-block;
}
</style>
