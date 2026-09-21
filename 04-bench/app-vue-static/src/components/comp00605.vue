<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00625B, calcu01056B, calcu00769B, calcu01547A, calcu00958B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00625B(seed) - calcu01056B(seed) + calcu00769B(seed) - calcu01547A(seed) + calcu00958B(seed));
</script>

<template>
  <div class="blk">comp00605: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(4 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(184 50% 50%);
  display: inline-block;
}
</style>
