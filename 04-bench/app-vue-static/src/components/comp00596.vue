<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00914A, calcu00814A, calcu00947B, calcu00956A } from '../lib/index.js';

const seed = 32;
const total = computed(() => calcu00914A(seed) - calcu00814A(seed) + calcu00947B(seed) - calcu00956A(seed));
</script>

<template>
  <div class="blk">comp00596: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(31 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(211 50% 50%);
  display: inline-block;
}
</style>
