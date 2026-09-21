<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00402A, calcu00986B, calcu01016A } from '../lib/index.js';

const seed = 2;
const total = computed(() => calcu00402A(seed) - calcu00986B(seed) + calcu01016A(seed));
</script>

<template>
  <div class="blk">comp00846: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(63 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(243 50% 50%);
  display: inline-block;
}
</style>
