<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01586B, calcu00565B, calcu01585A, calcu00194A, calcu00367A } from '../lib/index.js';

const seed = 15;
const total = computed(() => calcu01586B(seed) - calcu00565B(seed) + calcu01585A(seed) - calcu00194A(seed) + calcu00367A(seed));
</script>

<template>
  <div class="blk">comp00324: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(206 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(26 50% 50%);
  display: inline-block;
}
</style>
