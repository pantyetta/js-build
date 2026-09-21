<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00883A, calcu00599B, calcu01031A } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu00883A(seed) - calcu00599B(seed) + calcu01031A(seed));
</script>

<template>
  <div class="blk">comp00250: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(297 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(117 50% 50%);
  display: inline-block;
}
</style>
