<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01257A, calcu01184B, calcu00332A, calcu01498A, calcu01288A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01257A(seed) - calcu01184B(seed) + calcu00332A(seed) - calcu01498A(seed) + calcu01288A(seed));
</script>

<template>
  <div class="blk">comp00359: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(309 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(129 50% 50%);
  display: inline-block;
}
</style>
