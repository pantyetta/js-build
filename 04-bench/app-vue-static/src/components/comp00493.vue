<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00015A, calcu01575B, calcu01580A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00015A(seed) - calcu01575B(seed) + calcu01580A(seed));
</script>

<template>
  <div class="blk">comp00493: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(108 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(288 50% 50%);
  display: inline-block;
}
</style>
