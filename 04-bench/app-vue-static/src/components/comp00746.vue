<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01085B, calcu00297B, calcu01576A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01085B(seed) - calcu00297B(seed) + calcu01576A(seed));
</script>

<template>
  <div class="blk">comp00746: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(70 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(250 50% 50%);
  display: inline-block;
}
</style>
