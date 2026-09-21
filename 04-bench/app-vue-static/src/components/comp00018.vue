<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01089A, calcu01411A, calcu00344B, calcu00909B } from '../lib/index.js';

const seed = 43;
const total = computed(() => calcu01089A(seed) - calcu01411A(seed) + calcu00344B(seed) - calcu00909B(seed));
</script>

<template>
  <div class="blk">comp00018: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(350 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(170 50% 50%);
  display: inline-block;
}
</style>
