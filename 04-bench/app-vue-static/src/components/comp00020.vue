<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01517A, calcu01348A, calcu00442A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01517A(seed) - calcu01348A(seed) + calcu00442A(seed));
</script>

<template>
  <div class="blk">comp00020: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(214 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(34 50% 50%);
  display: inline-block;
}
</style>
