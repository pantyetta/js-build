<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01486A, calcu01244A, calcu01484A, calcu01147B, calcu01526A } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu01486A(seed) - calcu01244A(seed) + calcu01484A(seed) - calcu01147B(seed) + calcu01526A(seed));
</script>

<template>
  <div class="blk">comp01037: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(270 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(90 50% 50%);
  display: inline-block;
}
</style>
