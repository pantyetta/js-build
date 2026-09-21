<!-- 生成ファイル（04-bench/generate-vue.mjs）。手で編集しない。 -->
<!-- lib/index.js（バレル）から named import。computed で合成して表示するだけの葉コンポーネント。 -->
<script setup>
import { computed } from 'vue';
import { calcu00264A, calcu00344B, calcu01434A, calcu00595A, calcu00938B } from '../lib/index.js';

const seed = 10;
const total = computed(() => calcu00264A(seed) - calcu00344B(seed) + calcu01434A(seed) - calcu00595A(seed) + calcu00938B(seed));
</script>

<template>
  <div class="blk">comp00001: {{ total }}</div>
</template>

<style scoped>
.blk {
  color: hsl(61 70% 40%);
  padding: 0.25rem;
  margin: 0.1rem;
  border: 1px solid hsl(241 50% 50%);
  display: inline-block;
}
</style>
