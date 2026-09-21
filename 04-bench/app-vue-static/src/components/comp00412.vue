<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01063B, calcu00547A, calcu01165B } from '../lib/index.js';

const seed = 49;
const total = computed(() => calcu01063B(seed) - calcu00547A(seed) + calcu01165B(seed));
</script>

<template>
  <div class="blk">comp00412: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(10 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(190 50% 50%);
  display: inline-block;
}
</style>
