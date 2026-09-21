<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00614A, calcu00038B, calcu01520A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu00614A(seed) - calcu00038B(seed) + calcu01520A(seed));
</script>

<template>
  <div class="blk">comp00307: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(83 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(263 50% 50%);
  display: inline-block;
}
</style>
