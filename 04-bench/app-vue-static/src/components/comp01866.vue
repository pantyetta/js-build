<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu01296A, calcu01460A, calcu01202A, calcu01021B, calcu01259B } from '../lib/index.js';

const seed = 39;
const total = computed(() => calcu01296A(seed) - calcu01460A(seed) + calcu01202A(seed) - calcu01021B(seed) + calcu01259B(seed));
</script>

<template>
  <div class="blk">comp01866: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(36 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(216 50% 50%);
  display: inline-block;
}
</style>
