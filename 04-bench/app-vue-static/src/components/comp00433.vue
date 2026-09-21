<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00953A, calcu01197A, calcu00316A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00953A(seed) - calcu01197A(seed) + calcu00316A(seed));
</script>

<template>
  <div class="blk">comp00433: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(151 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(331 50% 50%);
  display: inline-block;
}
</style>
