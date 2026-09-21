<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00020A, calcu01245A, calcu00852A } from '../lib/index.js';

const seed = 3;
const total = computed(() => calcu00020A(seed) - calcu01245A(seed) + calcu00852A(seed));
</script>

<template>
  <div class="blk">comp00106: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(42 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(222 50% 50%);
  display: inline-block;
}
</style>
