<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01000B, calcu00201B, calcu01442A, calcu01494A } from '../lib/index.js';

const seed = 26;
const total = computed(() => calcu01000B(seed) - calcu00201B(seed) + calcu01442A(seed) - calcu01494A(seed));
</script>

<template>
  <div class="blk">comp01409: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(218 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(38 50% 50%);
  display: inline-block;
}
</style>
