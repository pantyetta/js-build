<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01457A, calcu00484A, calcu00379A, calcu00805B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01457A(seed) - calcu00484A(seed) + calcu00379A(seed) - calcu00805B(seed));
</script>

<template>
  <div class="blk">comp01938: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(298 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(118 50% 50%);
  display: inline-block;
}
</style>
