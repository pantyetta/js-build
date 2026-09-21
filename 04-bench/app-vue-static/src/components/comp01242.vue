<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00373A, calcu01364A, calcu01412B, calcu01307A, calcu01191A } from '../lib/index.js';

const seed = 28;
const total = computed(() => calcu00373A(seed) - calcu01364A(seed) + calcu01412B(seed) - calcu01307A(seed) + calcu01191A(seed));
</script>

<template>
  <div class="blk">comp01242: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(42 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(222 50% 50%);
  display: inline-block;
}
</style>
