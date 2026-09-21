<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01236B, calcu00301B, calcu01584B, calcu00328A, calcu00821A } from '../lib/index.js';

const seed = 23;
const total = computed(() => calcu01236B(seed) - calcu00301B(seed) + calcu01584B(seed) - calcu00328A(seed) + calcu00821A(seed));
</script>

<template>
  <div class="blk">comp00244: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(243 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(63 50% 50%);
  display: inline-block;
}
</style>
