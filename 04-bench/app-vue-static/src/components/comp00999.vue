<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00156A, calcu00304A, calcu01247B, calcu00133A, calcu00701B } from '../lib/index.js';

const seed = 50;
const total = computed(() => calcu00156A(seed) - calcu00304A(seed) + calcu01247B(seed) - calcu00133A(seed) + calcu00701B(seed));
</script>

<template>
  <div class="blk">comp00999: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(123 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(303 50% 50%);
  display: inline-block;
}
</style>
