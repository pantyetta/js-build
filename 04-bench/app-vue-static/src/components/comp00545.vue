<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00584A, calcu01417A, calcu01322B, calcu00641B } from '../lib/index.js';

const seed = 1;
const total = computed(() => calcu00584A(seed) - calcu01417A(seed) + calcu01322B(seed) - calcu00641B(seed));
</script>

<template>
  <div class="blk">comp00545: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(351 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(171 50% 50%);
  display: inline-block;
}
</style>
