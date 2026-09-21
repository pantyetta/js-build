<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01142A, calcu01350B, calcu00317A, calcu01495A } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu01142A(seed) - calcu01350B(seed) + calcu00317A(seed) - calcu01495A(seed));
</script>

<template>
  <div class="blk">comp00085: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(113 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(293 50% 50%);
  display: inline-block;
}
</style>
