<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01126B, calcu01387A, calcu00383B, calcu00476B, calcu01206A } from '../lib/index.js';

const seed = 17;
const total = computed(() => calcu01126B(seed) - calcu01387A(seed) + calcu00383B(seed) - calcu00476B(seed) + calcu01206A(seed));
</script>

<template>
  <div class="blk">comp01855: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(166 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(346 50% 50%);
  display: inline-block;
}
</style>
