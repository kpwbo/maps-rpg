<template>
  <div v-if="place" class="q-pa-sm">
    <p class="text-center">{{ place.name }}</p>
    <p>{{ $t('bank.Cash_on_hand') }} {{ cash }}</p>
    <p>{{ $t('bank.Money_in_bank') }} {{ bank }}</p>
    <q-field>
      <q-input v-model="amount" type="number" min="0" :decimals="2" prefix="$"
               :stack-label="$t('bank.Amount_to_deposit_or_withdraw')" />
    </q-field>
    <div class="q-pt-sm row justify-center gutter-xs">
      <div>
        <q-btn color="primary" @click="deposit">{{ $t('bank.Deposit') }}</q-btn>
      </div>
      <div>
        <q-btn color="primary" @click="withdraw">{{ $t('bank.Withdraw') }}</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    place: { type: Object, default: null },
  },
  data() {
    return {
      amount: null,
    };
  },
  computed: {
    cash() {
      return this.$store.getters['money/getCash'];
    },
    bank() {
      return this.$store.getters['money/getBank'](this.place.id);
    },
  },
  created() {
    if (!this.place) {
      this.$router.push('/');
    }
  },
  methods: {
    deposit() {
      this.$store.commit('money/deposit', { amount: this.amount, placeId: this.place.id });
      this.amount = null;
    },
    withdraw() {
      this.$store.commit('money/withdraw', { amount: this.amount, placeId: this.place.id });
      this.amount = null;
    },
  },
};
</script>
