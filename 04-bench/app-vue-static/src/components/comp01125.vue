<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00445B, calcu00305B, calcu00608B, calcu00238A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00445B(seed) - calcu00305B(seed) + calcu00608B(seed) - calcu00238A(seed));
</script>

<template>
  <div class="blk">comp01125: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(203 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(23 50% 50%);
  display: inline-block;
}
</style>
