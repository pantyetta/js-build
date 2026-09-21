<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01112A, calcu01069A, calcu00769B, calcu01496B } from '../lib/index.js';

const seed = 16;
const total = computed(() => calcu01112A(seed) - calcu01069A(seed) + calcu00769B(seed) - calcu01496B(seed));
</script>

<template>
  <div class="blk">comp00203: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(303 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(123 50% 50%);
  display: inline-block;
}
</style>
