<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01353A, calcu01068B, calcu01235B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu01353A(seed) - calcu01068B(seed) + calcu01235B(seed));
</script>

<template>
  <div class="blk">comp00207: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(40 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(220 50% 50%);
  display: inline-block;
}
</style>
