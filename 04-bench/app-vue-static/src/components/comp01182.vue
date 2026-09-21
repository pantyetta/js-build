<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00411A, calcu01498A, calcu00607A } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00411A(seed) - calcu01498A(seed) + calcu00607A(seed));
</script>

<template>
  <div class="blk">comp01182: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(310 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(130 50% 50%);
  display: inline-block;
}
</style>
