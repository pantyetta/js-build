<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01399B, calcu01359B, calcu01038A } from '../lib/index.js';

const seed = 36;
const total = computed(() => calcu01399B(seed) - calcu01359B(seed) + calcu01038A(seed));
</script>

<template>
  <div class="blk">comp00155: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(217 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(37 50% 50%);
  display: inline-block;
}
</style>
