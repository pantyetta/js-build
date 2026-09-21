<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01315A, calcu01099B, calcu00726A, calcu00290A, calcu00166A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu01315A(seed) - calcu01099B(seed) + calcu00726A(seed) - calcu00290A(seed) + calcu00166A(seed));
</script>

<template>
  <div class="blk">comp00120: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(312 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(132 50% 50%);
  display: inline-block;
}
</style>
