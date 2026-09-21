<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00874A, calcu01405A, calcu01524B } from '../lib/index.js';

const seed = 46;
const total = computed(() => calcu00874A(seed) - calcu01405A(seed) + calcu01524B(seed));
</script>

<template>
  <div class="blk">comp01989: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(216 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(36 50% 50%);
  display: inline-block;
}
</style>
