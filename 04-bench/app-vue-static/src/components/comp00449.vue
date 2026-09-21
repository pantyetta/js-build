<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01248A, calcu01557A, calcu00817A, calcu01115A, calcu00704A } from '../lib/index.js';

const seed = 34;
const total = computed(() => calcu01248A(seed) - calcu01557A(seed) + calcu00817A(seed) - calcu01115A(seed) + calcu00704A(seed));
</script>

<template>
  <div class="blk">comp00449: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(256 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(76 50% 50%);
  display: inline-block;
}
</style>
