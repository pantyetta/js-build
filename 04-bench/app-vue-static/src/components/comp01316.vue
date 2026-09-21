<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01055B, calcu00840A, calcu01038B, calcu00815A } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01055B(seed) - calcu00840A(seed) + calcu01038B(seed) - calcu00815A(seed));
</script>

<template>
  <div class="blk">comp01316: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(220 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(40 50% 50%);
  display: inline-block;
}
</style>
