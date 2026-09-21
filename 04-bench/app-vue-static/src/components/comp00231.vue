<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01585A, calcu00911A, calcu01006A, calcu00525B, calcu00807B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01585A(seed) - calcu00911A(seed) + calcu01006A(seed) - calcu00525B(seed) + calcu00807B(seed));
</script>

<template>
  <div class="blk">comp00231: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(302 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(122 50% 50%);
  display: inline-block;
}
</style>
