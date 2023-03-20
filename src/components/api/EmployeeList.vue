<template>
  <div>
    <h3>Employee list</h3>
    <table border="1px">
        <tr>
            <td>Name</td>
            <td>Salary</td>
            <td>Age</td>
        </tr>
        <tr v-for="employee in list" v-bind:key="employee.id">
            <td>{{ employee.employee_name }}</td>
            <td>{{ employee.employee_salary }}</td>
            <td>{{ employee.employee_age }}</td> 
        </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EmployeeList",
  data() {
    return { list: undefined };
  },
  mounted() {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        this.list = res.data.data;
        console.log(res);
      });
  },
};
</script>
<style>
</style>
