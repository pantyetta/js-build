<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01564A, calcu01460B, calcu01194B, calcu01282A, calcu01197A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu01564A(seed) - calcu01460B(seed) + calcu01194B(seed) - calcu01282A(seed) + calcu01197A(seed));
</script>

<template>
  <div class="blk">comp01873: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(137 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(317 50% 50%);
  display: inline-block;
}
</style>
