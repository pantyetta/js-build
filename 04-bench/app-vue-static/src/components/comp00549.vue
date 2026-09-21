<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01312A, calcu00189A, calcu00597A } from '../lib/index.js';

const seed = 12;
const total = computed(() => calcu01312A(seed) - calcu00189A(seed) + calcu00597A(seed));
</script>

<template>
  <div class="blk">comp00549: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(229 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(49 50% 50%);
  display: inline-block;
}
</style>
