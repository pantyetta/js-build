<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00383A, calcu01564A, calcu00482A, calcu00234B } from '../lib/index.js';

const seed = 44;
const total = computed(() => calcu00383A(seed) - calcu01564A(seed) + calcu00482A(seed) - calcu00234B(seed));
</script>

<template>
  <div class="blk">comp00295: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(127 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(307 50% 50%);
  display: inline-block;
}
</style>
