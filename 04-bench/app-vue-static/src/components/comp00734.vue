<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01168B, calcu01226B, calcu00103A } from '../lib/index.js';

const seed = 29;
const total = computed(() => calcu01168B(seed) - calcu01226B(seed) + calcu00103A(seed));
</script>

<template>
  <div class="blk">comp00734: {{ total }}</div>
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
