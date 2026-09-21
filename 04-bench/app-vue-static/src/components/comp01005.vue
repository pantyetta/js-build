<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01044A, calcu01398B, calcu00453B } from '../lib/index.js';

const seed = 48;
const total = computed(() => calcu01044A(seed) - calcu01398B(seed) + calcu00453B(seed));
</script>

<template>
  <div class="blk">comp01005: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(105 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(285 50% 50%);
  display: inline-block;
}
</style>
