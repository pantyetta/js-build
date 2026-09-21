<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01396B, calcu00101A, calcu00018A } from '../lib/index.js';

const seed = 37;
const total = computed(() => calcu01396B(seed) - calcu00101A(seed) + calcu00018A(seed));
</script>

<template>
  <div class="blk">comp01132: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(331 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(151 50% 50%);
  display: inline-block;
}
</style>
