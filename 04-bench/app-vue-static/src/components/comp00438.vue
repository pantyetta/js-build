<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01414A, calcu00834B, calcu00538B, calcu00383A, calcu00424B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01414A(seed) - calcu00834B(seed) + calcu00538B(seed) - calcu00383A(seed) + calcu00424B(seed));
</script>

<template>
  <div class="blk">comp00438: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(132 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(312 50% 50%);
  display: inline-block;
}
</style>
