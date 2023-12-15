<template>
  <div>
    <button @click="changeLocale('en')">English</button>
    <button @click="changeLocale('fr')">French</button>
    <p>{{ translatedText }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const currentLocale = ref(locale.value);

const changeLocale = (newLocale: string) => {
  currentLocale.value = newLocale;
  locale.value = newLocale;
};

const translatedText = computed(() => t('hello'));
</script>
