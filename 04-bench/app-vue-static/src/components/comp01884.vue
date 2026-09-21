<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01215A, calcu00897A, calcu00667A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01215A(seed) - calcu00897A(seed) + calcu00667A(seed));
</script>

<template>
  <div class="blk">comp01884: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(178 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(358 50% 50%);
  display: inline-block;
}
</style>
