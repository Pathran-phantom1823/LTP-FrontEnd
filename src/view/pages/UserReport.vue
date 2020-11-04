<template>
<div class="pt-20">
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="topic"
      label="Topic"
      required
    ></v-text-field>

    <v-text-field
      v-model="description"
      label="Description"
      required
    ></v-text-field>

<v-card-actions>
  <v-spacer></v-spacer>
    <v-btn
      color="error"
      class="mr-4"
      @click="report"
    >
      Report
    </v-btn>
</v-card-actions>
  </v-form>
</div>
</template>
<script>
import ApiService from "@/core/services/api.service";
import Swal from "sweetalert2";
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      topic: null,
      description: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      report() {
      const id = localStorage.getItem("value");
      const userID = id.substr(id.lastIndexOf("*") + 1);

      ApiService.post("report", {
        accountId: userID,
        topic: this.topic,
        description: this.description,
        resolve:"false",
      }).then(() => {
        Swal.fire({
          title: "",
          text: "Successfully created new report",
          icon: "success",
          confirmButtonClass: "btn btn-secondary",
        });
      });
    },
    },
  }
  
</script>