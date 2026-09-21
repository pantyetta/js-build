<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00854B, calcu01313B, calcu00018B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00854B(seed) - calcu01313B(seed) + calcu00018B(seed));
</script>

<template>
  <div class="blk">comp00649: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(276 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(96 50% 50%);
  display: inline-block;
}
</style>
