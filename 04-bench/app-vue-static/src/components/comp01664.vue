<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00246B, calcu00962A, calcu01037A, calcu00013B } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu00246B(seed) - calcu00962A(seed) + calcu01037A(seed) - calcu00013B(seed));
</script>

<template>
  <div class="blk">comp01664: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(18 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(198 50% 50%);
  display: inline-block;
}
</style>
