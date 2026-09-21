<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01406A, calcu01486B, calcu01469A } from '../lib/index.js';

const seed = 4;
const total = computed(() => calcu01406A(seed) - calcu01486B(seed) + calcu01469A(seed));
</script>

<template>
  <div class="blk">comp00017: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(228 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(48 50% 50%);
  display: inline-block;
}
</style>
