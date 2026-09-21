<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01214A, calcu01556B, calcu01500B } from '../lib/index.js';

const seed = 45;
const total = computed(() => calcu01214A(seed) - calcu01556B(seed) + calcu01500B(seed));
</script>

<template>
  <div class="blk">comp01441: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(317 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(137 50% 50%);
  display: inline-block;
}
</style>
