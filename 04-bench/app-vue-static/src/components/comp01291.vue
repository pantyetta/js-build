<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00647A, calcu01257B, calcu01352B, calcu00938B, calcu00703A } from '../lib/index.js';

const seed = 33;
const total = computed(() => calcu00647A(seed) - calcu01257B(seed) + calcu01352B(seed) - calcu00938B(seed) + calcu00703A(seed));
</script>

<template>
  <div class="blk">comp01291: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(66 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(246 50% 50%);
  display: inline-block;
}
</style>
