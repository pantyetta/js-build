<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01567A, calcu00742B, calcu00112A, calcu01286B } from '../lib/index.js';

const seed = 47;
const total = computed(() => calcu01567A(seed) - calcu00742B(seed) + calcu00112A(seed) - calcu01286B(seed));
</script>

<template>
  <div class="blk">comp00769: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(31 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(211 50% 50%);
  display: inline-block;
}
</style>
