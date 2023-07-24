<script>
import amortizations from './amortization';


export default {
  data() {
    return {
      amortizations: amortizations,
      currentPage: 0,
      itemsPerPage: 5,
      sortByField: 'schedule_date',
      sortAsc: false,
    };
  },
  computed: {
    sortedAmortizations() {
      if (this.sortByField) {
        return this.amortizations.slice().sort((a, b) => {
          if (a[this.sortByField] > b[this.sortByField]) return this.sortAsc ? 1 : -1;
          if (a[this.sortByField] < b[this.sortByField]) return this.sortAsc ? -1 : 1;
          return 0;
        });
      }
      return this.amortizations;
    },
    totalPages() {
      return Math.ceil(this.sortedAmortizations.length / this.itemsPerPage);
    },
    paginatedAmortizations() {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.sortedAmortizations.slice(start, end);
    },
  },
  methods: {
    sortBy(field) {
      if (this.sortByField === field) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortByField = field;
        this.sortAsc = true;
      }
      this.currentPage = 0; // Reset pagination to the first page after sorting
    },
    nextPage() {
      if (this.currentPage < this.totalPages - 1) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
    },
  },
};
</script>

<template>
  <div class="app" data-theme="winter">
    <h1>Amortization List</h1>
    <div class="overflow-x-auto">
      <table class="table outline-slate-800">
        <thead>
          <tr>
            <th @click="sortBy('schedule_date')">Date</th>
            <th @click="sortBy('state')">State</th>
            <th @click="sortBy('amount')">Amount</th>
            <th @click="sortBy('project_id')">Project ID</th>
          </tr>
        </thead>
        <tbody>
          <tr
              v-for="amortization in paginatedAmortizations"
              :key="amortization.schedule_date"
            >
              <td>{{ amortization.schedule_date }}</td>
              <td :class="{
                'bg-yellow-300': amortization.state === 'pending',
                'bg-green-300': amortization.state === 'paid',
                'bg-red-300': amortization.state === 'rejected',
              }">{{ amortization.state }}</td>
              <td>{{ amortization.amount }} €</td>
              <td>{{ amortization.project_id }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <button @click="prevPage" :disabled="currentPage === 0" class="btn">PREVIOUS</button>
      <span>{{ currentPage + 1 }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages - 1" class="btn">NEXT</button>
    </div>
  </div>
</template>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.bg-yellow-300 {
  color: #daa803;
}

.bg-green-300 {
  color: #03d252;
}

.bg-red-300 {
  color: #bd0202;
}

.app {
}

table {
  @apply w-full border-collapse table-fixed;
}

th, td {
  @apply border py-2 px-4 text-left;
}

h1, h2{
  @apply my-6 font-bold text-5xl text-slate-700;
}

button {
  @apply px-4 py-2 my-5 mx-3 rounded btn-success btn-outline btn-info;
}

</style>
