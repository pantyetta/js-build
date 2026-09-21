<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00662A, calcu00900A, calcu00263A, calcu00623B } from '../lib/index.js';

const seed = 14;
const total = computed(() => calcu00662A(seed) - calcu00900A(seed) + calcu00263A(seed) - calcu00623B(seed));
</script>

<template>
  <div class="blk">comp01207: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(308 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(128 50% 50%);
  display: inline-block;
}
</style>
