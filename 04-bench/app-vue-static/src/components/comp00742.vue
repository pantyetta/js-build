<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00177B, calcu00655B, calcu01112B, calcu00043A, calcu00166B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00177B(seed) - calcu00655B(seed) + calcu01112B(seed) - calcu00043A(seed) + calcu00166B(seed));
</script>

<template>
  <div class="blk">comp00742: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>
