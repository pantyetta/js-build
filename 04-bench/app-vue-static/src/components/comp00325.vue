<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01210A, calcu00431B, calcu01432B } from '../lib/index.js';

const seed = 20;
const total = computed(() => calcu01210A(seed) - calcu00431B(seed) + calcu01432B(seed));
</script>

<template>
  <div class="blk">comp00325: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(186 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(6 50% 50%);
  display: inline-block;
}
</style>
