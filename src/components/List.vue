<template>
  <div class="main">
    <div class="stuff">
      <h4>List of Blogs</h4>
    </div>
    <div class="mtuff">
      <label for="status">Filter:</label>
      <select id="status" v-model="fylter" name="Status">
      <option value="" disabled selected>Status</option>
        <option value="published">published</option>
        <option value="draft">draft</option>
        <option value="deactivated">deactivated</option>
      </select>
    </div>
    <div class="muff">
      <select id="date" v-model="filterByDate" name="Date">
      <option value="" disabled selected>Date</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2020">2020</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in filteredPosts" :key="post.id">
          <td>{{ post.date }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.status }}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      posts: [],
      fylter: "",
      filterByDate: ""
    };
  },
  mounted() {
    axios
      .get("https://my-json-server.typicode.com/orzel-bielik/test/posts")
      .then(res => {
        this.posts = res.data;
        console.log(res.data);
      })
      .catch(err => console.log(err));
  },
  computed: {
    filteredPosts: function() {
      return this.posts.filter(post => {
        if (this.fylter || this.filterByDate) {
          const [date] = post.date.split(" ");
          return new Date(date).getFullYear() === +this.filterByDate || post.status.match(this.fylter);
        }
        return true;
      });
    }
  }
};
</script>

<style scoped>
body {
  background: #c4c4c4;
  color: #444;
  font: 100%/30px "Helvetica Neue", helvetica, arial, sans-serif;
  text-shadow: 0 1px 0 #fff;
}

strong {
  font-weight: bold;
}

em {
  font-style: italic;
}

table {
  background: #f5f5f5;
  border-collapse: separate;
  box-shadow: inset 0 1px 0 #fff;
  font-size: 12px;
  line-height: 24px;
  margin: 30px auto;
  text-align: left;
  width: 800px;
}

th {
  background: rgb(219, 219, 219);
  border: none;
  border-radius: 2px;
  color: #000;
  font-weight: bold;
  padding: 10px 15px;
  position: relative;
}

th:after {
  content: "";
  display: block;
  height: 25%;
  left: 0;
  margin: 1px 0 0 0;
  position: absolute;
  top: 25%;
  width: 100%;
}

td {
  padding: 10px 15px;
  position: relative;
  transition: all 300ms;
}
.stuff {
  display: inline-block;
}
.mtuff {
  display: inline-block;
  padding-left: 25rem;
}
.muff {
  display: inline-block;
}
select {
  padding: 10px 30px;
  margin: 0 5px;
  border: none;
  border-radius: 6px;
  background: rgb(230, 229, 229);
  color: black;
}
.main {
  position: relative;
  right: 200px;
  bottom: 50px;
  top: -960px;
}
</style>
