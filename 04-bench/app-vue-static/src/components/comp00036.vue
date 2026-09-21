<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01410A, calcu00110B, calcu00924B, calcu00402A } from '../lib/index.js';

const seed = 19;
const total = computed(() => calcu01410A(seed) - calcu00110B(seed) + calcu00924B(seed) - calcu00402A(seed));
</script>

<template>
  <div class="blk">comp00036: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(76 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(256 50% 50%);
  display: inline-block;
}
</style>
