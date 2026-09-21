<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00838A, calcu00194B, calcu01492A, calcu01218A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00838A(seed) - calcu00194B(seed) + calcu01492A(seed) - calcu01218A(seed));
</script>

<template>
  <div class="blk">comp01112: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(252 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(72 50% 50%);
  display: inline-block;
}
</style>
