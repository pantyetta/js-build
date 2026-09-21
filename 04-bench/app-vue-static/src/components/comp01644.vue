<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01264B, calcu00656B, calcu00628A } from '../lib/index.js';

const seed = 11;
const total = computed(() => calcu01264B(seed) - calcu00656B(seed) + calcu00628A(seed));
</script>

<template>
  <div class="blk">comp01644: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(112 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(292 50% 50%);
  display: inline-block;
}
</style>
