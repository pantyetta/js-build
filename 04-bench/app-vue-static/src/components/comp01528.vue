<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00728B, calcu00953A, calcu00526A } from '../lib/index.js';

const seed = 30;
const total = computed(() => calcu00728B(seed) - calcu00953A(seed) + calcu00526A(seed));
</script>

<template>
  <div class="blk">comp01528: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(51 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(231 50% 50%);
  display: inline-block;
}
</style>
