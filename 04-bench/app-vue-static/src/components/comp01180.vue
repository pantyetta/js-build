<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00449B, calcu01239B, calcu00760A, calcu01575B } from '../lib/index.js';

const seed = 25;
const total = computed(() => calcu00449B(seed) - calcu01239B(seed) + calcu00760A(seed) - calcu01575B(seed));
</script>

<template>
  <div class="blk">comp01180: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(188 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(8 50% 50%);
  display: inline-block;
}
</style>
