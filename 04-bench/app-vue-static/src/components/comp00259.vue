<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01551A, calcu01500A, calcu01482B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01551A(seed) - calcu01500A(seed) + calcu01482B(seed));
</script>

<template>
  <div class="blk">comp00259: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(303 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(123 50% 50%);
  display: inline-block;
}
</style>
