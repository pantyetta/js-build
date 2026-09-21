<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00230B, calcu00631B, calcu00468A, calcu00870B, calcu00094B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu00230B(seed) - calcu00631B(seed) + calcu00468A(seed) - calcu00870B(seed) + calcu00094B(seed));
</script>

<template>
  <div class="blk">comp00540: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(20 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(200 50% 50%);
  display: inline-block;
}
</style>
