<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01262B, calcu00523A, calcu01544A, calcu00272B, calcu01309A } from '../lib/index.js';

const seed = 42;
const total = computed(() => calcu01262B(seed) - calcu00523A(seed) + calcu01544A(seed) - calcu00272B(seed) + calcu01309A(seed));
</script>

<template>
  <div class="blk">comp00560: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(270 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(90 50% 50%);
  display: inline-block;
}
</style>
