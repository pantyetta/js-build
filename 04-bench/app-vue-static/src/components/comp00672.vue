<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01577A, calcu01277B, calcu00386B } from '../lib/index.js';

const seed = 18;
const total = computed(() => calcu01577A(seed) - calcu01277B(seed) + calcu00386B(seed));
</script>

<template>
  <div class="blk">comp00672: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(202 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(22 50% 50%);
  display: inline-block;
}
</style>
