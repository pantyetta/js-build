<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00000B, calcu01548A, calcu01031B } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu00000B(seed) - calcu01548A(seed) + calcu01031B(seed));
</script>

<template>
  <div class="blk">comp00901: {{ total }}</div>
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
