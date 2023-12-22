<template>
 <div class="p-3">
  <dream-table
   v-model="selecteds"
   selectable
   draggable
   :columns="columns"
   :items="items"
  ></dream-table>
  <pre>{{ items }}</pre>
 </div>
</template>
<script setup>
import { ref } from 'vue'

const selecteds = ref([])

const columns = ref([
 {
  name: 'State',
  value: 'state'
 },
 {
  name: 'City',
  value: 'city'
 }
])

const items = ref([
 {
  id: 1,
  state: 'Indiana',
  city: 'Indianapolis'
 },
 {
  id: 2,
  state: 'Ohio',
  city: 'Columbus'
 },
 {
  id: 3,
  state: 'Michigan',
  city: 'Detroit'
 },
 {
  id: 4,
  state: 'Indiana1',
  city: 'Indianapolis'
 },
 {
  id: 5,
  state: 'Ohio1',
  city: 'Columbus'
 },
 {
  id: 6,
  state: 'Michigan1',
  city: 'Detroit'
 },
 {
  id: 7,
  state: 'Indiana2',
  city: 'Indianapolis'
 },
 {
  id: 8,
  state: 'Ohio2',
  city: 'Columbus'
 },
 {
  id: 9,
  state: 'Michigan2',
  city: 'Detroit'
 }
])
</script>
