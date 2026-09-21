<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01018B, calcu01386A, calcu01268A, calcu01262B } from '../lib/index.js';

const seed = 9;
const total = computed(() => calcu01018B(seed) - calcu01386A(seed) + calcu01268A(seed) - calcu01262B(seed));
</script>

<template>
  <div class="blk">comp00114: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(253 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(73 50% 50%);
  display: inline-block;
}
</style>
