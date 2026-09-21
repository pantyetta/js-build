<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00623B, calcu00000A, calcu00776B, calcu00462B } from '../lib/index.js';

const seed = 41;
const total = computed(() => calcu00623B(seed) - calcu00000A(seed) + calcu00776B(seed) - calcu00462B(seed));
</script>

<template>
  <div class="blk">comp01472: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(15 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(195 50% 50%);
  display: inline-block;
}
</style>
