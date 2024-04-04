<template>
  <div>
    <h1>list items</h1>
    <div>
      <UserCard />
    </div>
  </div>
</template>
<script>
import UserCard from "@/components/UserCard";

export default {
  name: "ListUsers",
  components: {
    UserCard,
  },
};
</script>
