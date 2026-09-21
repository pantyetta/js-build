<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01504B, calcu01448A, calcu00309A, calcu00035B } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01504B(seed) - calcu01448A(seed) + calcu00309A(seed) - calcu00035B(seed));
</script>

<template>
  <div class="blk">comp00986: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(139 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(319 50% 50%);
  display: inline-block;
}
</style>
